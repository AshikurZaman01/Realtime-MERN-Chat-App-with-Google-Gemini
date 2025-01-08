import { useContext, useState } from "react";
import { UserContext } from "../../../ContextApi/user.context";
import ModalForm from "./ModalForm";
import HomeText from "./HomeText";
import axiosInstance from "../../../Config/Axios";

const Home = () => {

    const { user } = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleCreateProject = async (e) => {
        e.preventDefault();
        console.log(projectName);
        setErrorMessage('');

        if (!projectName.trim()) {
            alert('Please enter a project name');
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post('projects/projectCreate', { name: projectName });

            if (response.data.message) {
                alert(response.data.message);
                setProjectName('');
                setIsModalOpen(false);
            }


        } catch (error) {
            console.log(error)
            setErrorMessage(error.response?.data?.message || "An unexpected error occurred. Project Create Failed.");
        } finally {
            setLoading(false);
        }

    }


    return (
        <main className="flex   h-screen bg-gray-900 text-gray-100">



            <div>
                <HomeText setIsModalOpen={setIsModalOpen}></HomeText>

                <ModalForm
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    handleCreateProject={handleCreateProject}
                    projectName={projectName}
                    setProjectName={setProjectName}
                    errorMessage={errorMessage}
                    loading={loading} />
            </div>

        </main>
    );
};

export default Home;
