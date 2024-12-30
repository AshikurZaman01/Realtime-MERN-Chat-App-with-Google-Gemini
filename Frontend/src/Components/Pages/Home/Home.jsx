import { useContext, useState } from "react";
import { UserContext } from "../../../ContextApi/user.context";
import ModalForm from "./ModalForm";
import HomeText from "./HomeText";

const Home = () => {

    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");

    const handleCreateProject = (e) => {
        e.preventDefault();
        console.log(projectName)
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">

            <HomeText setIsModalOpen={setIsModalOpen}></HomeText>

            <ModalForm
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleCreateProject={handleCreateProject}
                projectName={projectName}
                setProjectName={setProjectName} />

        </main>
    );
};

export default Home;
