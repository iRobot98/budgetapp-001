console.log("jwt authentication online")

const jwt = require("jsonwebtoken");
const models = require("../../DB/models");
const argon2 = require("argon2");
const { errorHandler, withTransaction, HttpError } = require("../../utils/error");

const { secret } = require("./../../../settings")

// Sign Up
const Sign_Up = errorHandler(withTransaction(async (req, res, session) => {
    const userDoc = models.User({
        username: req.body.username,
        password: await argon2.hash(req.body.password)
    });
    const refreshTokenDoc = models.RefreshToken({
        owner: userDoc.id
    });

    await userDoc.save({ session });
    await refreshTokenDoc.save({ session });

    const refreshToken = createRefreshToken(userDoc.id, refreshTokenDoc.id);
    const accessToken = createAccessToken(userDoc.id);

    return {
        id: userDoc.id,
        accessToken,
        refreshToken
    };
}));

// Log In
const Log_In = errorHandler(withTransaction(async (req, res, session) => {
    const userDoc = await models.User
        .findOne({ username: req.body.username })
        .select('+password')
        .exec();
    if (!userDoc) {
        throw new HttpError(401, 'Wrong username or password');
    }
    await verifyPassword(userDoc.password, req.body.password);

    const refreshTokenDoc = models.RefreshToken({
        owner: userDoc.id
    });

    await refreshTokenDoc.save({ session });

    const refreshToken = createRefreshToken(userDoc.id, refreshTokenDoc.id);
    const accessToken = createAccessToken(userDoc.id);

    return {
        id: userDoc.id,
        accessToken,
        refreshToken
    };
}));

// New Refresh Token
const newRefreshToken = errorHandler(withTransaction(async (req, res, session) => {
    const currentRefreshToken = await validateRefreshToken(req.body.refreshToken);
    const refreshTokenDoc = models.RefreshToken({
        owner: currentRefreshToken.userId
    });

    await refreshTokenDoc.save({ session });
    await models.RefreshToken.deleteOne({ _id: currentRefreshToken.tokenId }, { session });

    const refreshToken = createRefreshToken(currentRefreshToken.userId, refreshTokenDoc.id);
    const accessToken = createAccessToken(currentRefreshToken.userId);

    return {
        id: currentRefreshToken.userId,
        accessToken,
        refreshToken
    };
}));

// New Access Token
const newAccessToken = errorHandler(async (req, res) => {
    const refreshToken = await validateRefreshToken(req.body.refreshToken);
    const accessToken = createAccessToken(refreshToken.userId);

    return {
        id: refreshToken.userId,
        accessToken,
        refreshToken: req.body.refreshToken
    };
});

// Log Out
const Log_Out = errorHandler(withTransaction(async (req, res, session) => {
    const refreshToken = await validateRefreshToken(req.body.refreshToken);
    await models.RefreshToken.deleteOne({ _id: refreshToken.tokenId }, { session });
    return { success: true };
}));

// Log Out All
const Log_Out_All = errorHandler(withTransaction(async (req, res, session) => {
    const refreshToken = await validateRefreshToken(req.body.refreshToken);
    await models.RefreshToken.deleteMany({ owner: refreshToken.userId }, { session });
    return { success: true };
}));

// Create Access Token
function createAccessToken(userId) {
    return jwt.sign({
        userId: userId
    }, secret.access_token, {
        expiresIn: '10m'
    });
}

// Create Refresh Token
function createRefreshToken(userId, refreshTokenId) {
    return jwt.sign({
        userId: userId,
        tokenId: refreshTokenId
    }, secret.refresh_token, {
        expiresIn: '30d'
    });
}

// Verify Password
const verifyPassword = async (hashedPassword, rawPassword) => {
    if (await argon2.verify(hashedPassword, rawPassword)) {
        // password matches
    } else {
        throw new HttpError(401, 'Wrong username or password');
    }
};

// Validate Refresh Token
const validateRefreshToken = async (token) => {
    const decodeToken = () => {
        try {
            return jwt.verify(token, secret.refresh_token);
        } catch (err) {
            // err
            throw new HttpError(401, 'Unauthorised');
        }
    }

    const decodedToken = decodeToken();
    const tokenExists = await models.RefreshToken.exists({ _id: decodedToken.tokenId, owner: decodedToken.userId });
    if (tokenExists) {
        return decodedToken;
    } else {
        throw new HttpError(401, 'Unauthorised');
    }
};

module.exports = {
    Sign_Up,
    Log_In,
    newRefreshToken,
    newAccessToken,
    Log_Out,
    Log_Out_All
};