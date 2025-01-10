import { FaSpinner, FaUsers } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ShowAllProjects = ({ loading, project }) => {
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="text-white flex items-center justify-center py-5">
                <FaSpinner className="animate-spin text-4xl text-white" />
                <p className="ml-2">Loading projects...</p>
            </div>
        );
    }

    if (!project?.data?.length) {
        return <p className="text-white">No projects available.</p>;
    }

    return (
        <div className="text-white flex flex-col items-center justify-start px-2 gap-y-2 pb-5">

            {project.data.map((item, index) => (
                <div
                    key={item._id || index}
                    onClick={() =>
                        navigate('/project', { state: { item } })
                    }
                    className="w-full max-w-md cursor-pointer text-center text-lg font-semibold text-white uppercase border border-gray-700 rounded-lg px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
                >
                    <h2 className="flex items-center justify-between gap-2">

                        {item.name || 'Unnamed Project'}

                        <span className='flex items-center gap-2'>
                            <FaUsers />
                            [{item?.users?.length || 0}]
                        </span>

                    </h2>
                </div>
            ))}

        </div>
    );
};

export default ShowAllProjects;
