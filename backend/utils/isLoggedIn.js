module.exports.isLoggedIn = function (req, res, next) {
    if (!req.session.token) {
        return res.json({
            msg: "You have to login first",
            status: 401
        });
    }
    next();
}