const jwt = require('jsonwebtoken');

const verifiedAuthUser = async (req, res, next) => {
    try {

        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
console.log()
        if (!token) {
            res.status(401).json({ success: false, message: 'Unauthorized User.' });
        }


    } catch (error) {
        req.status(401).json({ success: false, message: 'Unauthorized User.' })
    }
}

module.exports = verifiedAuthUser;