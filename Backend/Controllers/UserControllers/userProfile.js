

const userProfile = async (req, res) => {

    console.log(req.user);

    res.status(200).json({
        success: true,
        user: req.user
    })

}
module.exports = userProfile;