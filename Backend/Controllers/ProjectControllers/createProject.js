
const createProject = async (req, res) => {

    try {

        const { name } = req.body;
        const { userId } = req.user;

        console.log(name, userId);

    } catch (error) {

    }

}
module.exports = createProject;