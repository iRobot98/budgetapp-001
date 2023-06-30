const { User } = require("../../../DB/models");
const router = require("../../../router_import");
const { check_each_field } = require("./sign-up");
const { isEmpty } = require("./utils");
// const router = require("express").Router();

const tmp = (req, res) => {
    const { file, files, body } = req;
    console.log("file:", file, "\nfiles:", files, "\nbody:", body);
    // console.log(req)
    res.send({ tmp: "tmp" });
};

router.post("/sign-up", (req, res) => {
    const { file, files, body } = req;
    console.log("file:", file, "\nfiles:", files, "\nbody:", body);
    // console.log(req)

    if (isEmpty(body)) {
        res.status(400).send({
            errorcode: "002",
            error: "no request body",
        });
        return;
    }

    const errors = check_each_field(body);
    if (!isEmpty(errors)) {
        res.status(400).send({
            errorcode: "003",
            error: "invalid request body",
            errors,
        });
        return;
    }
    res.send({ tmp: "tmp" });
});

router.get("/log-in", tmp);
router.post("/log-in", tmp);

router.post("/new-refresh-token", tmp);
router.post("/new-access-token", tmp);
router.post("/log-out", tmp);
router.post("/log-out-all", tmp);

module.exports = router;
