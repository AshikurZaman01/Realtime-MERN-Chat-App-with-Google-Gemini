
const ModalForm = ({ isModalOpen, setIsModalOpen, handleCreateProject, projectName, setProjectName }) => {


    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold text-white">Create New Group</h2>
                            <p className="text-gray-400 text-sm">
                                Organize your chats by creating a new group.
                            </p>
                        </div>

                        <form onSubmit={handleCreateProject}>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-300">Group Name</label>
                                <input
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter group name"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500 focus:ring-2 focus:ring-gray-400"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalForm;
