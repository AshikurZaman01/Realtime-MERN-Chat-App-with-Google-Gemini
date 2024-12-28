const jwt = require('jsonwebtoken');

const verifiedAuthUser = async (req, res, next) => {
    try {
        // Get token from cookies or authorization header
        const token = req.cookies?.token || (req.headers.authorization?.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized User.' });
        }

        // Verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user data to request object
        req.user = decode;

        // Proceed to the next middleware
        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token.', error: error.message });
    }
};

module.exports = verifiedAuthUser;
