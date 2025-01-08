import { FaLink } from "react-icons/fa"


const HomeText = ({ setIsModalOpen }) => {
    return (
        <div className="projects text-center bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md h-screen flex items-center justify-center">

            <div>
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-white">Welcome to ChatHub</h1>
                    <p className="text-gray-400 mt-2">
                        Connect with friends and start a conversation. Let’s get chatting!
                    </p>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center w-full gap-2 p-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500">
                    <FaLink className="text-xl" />
                    <span>Create a Chat Group</span>
                </button>

            </div>

        </div>
    )
}

export default HomeText