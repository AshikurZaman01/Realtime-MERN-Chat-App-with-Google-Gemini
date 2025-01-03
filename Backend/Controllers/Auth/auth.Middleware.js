const jwt = require('jsonwebtoken');
const radisClient = require('../../ConnDB/Radis.DB');

const verifiedAuthUser = async (req, res, next) => {
    try {

        const token = req.cookies?.token || (req.headers.authorization?.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized User.' });
        }

        // Check if token is blacklisted in Redis
        const isBlackListed = await radisClient.get(token);

        if (isBlackListed) {
            res.cookie('token', '');
            return res.status(401).json({ success: false, message: 'Unauthorized User.' });
        }

        // Verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;

        next();

    } catch (error) {
        // Specific error handling for token issues
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token has expired. Login Again.' });
        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: 'Invalid token. Login Again.', error: error.message });
        }

        // Generic error handling for other issues
        return res.status(401).json({ success: false, message: 'Unauthorized User. Login Again.', error: error.message });
    }
};

module.exports = verifiedAuthUser;
