const { errorHandler } = require("../../utils/error");
const models = require("../models");

const me = errorHandler(async (req, res) => {
    const userDoc = await models.User.findById(req.userId).exec();
    if (!userDoc) {
        throw new HttpError(400, 'User not found');
    }
    return userDoc;
});

module.exports = {
    me
};