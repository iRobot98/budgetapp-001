const router = require("../../router_import")

const tmp = (req, res) => { res.send({ success: false }) }
router.post("/log-in", tmp)
router.post("/sign-up", tmp)
router.post("/new-refresh-token", tmp)
router.post("/new-access-token", tmp)
router.post("/log-out", tmp)
router.post("/log-out-all", tmp)


module.exports = router

// Log in
// Sign up
// New Refresh Token
// New Access Token
// Log Out
// Log Out All