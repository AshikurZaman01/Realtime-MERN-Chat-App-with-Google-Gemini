const radisClient = require("../../ConnDB/Radis.DB");

const userLogout = async (req, res) => {
    try {
        // Get token from cookies or authorization header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(400).json({ success: false, message: 'Token not provided.' });
        }

        await radisClient.set(token, 'logout', 'EX', 60 * 30);  // 30 minutes

        res.status(200).json({ success: true, message: 'Logout Successful.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Logout Failed.', error: error.message });
    }
};

module.exports = userLogout;
