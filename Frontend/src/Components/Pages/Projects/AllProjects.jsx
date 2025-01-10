import AllProjectsHeader from "./AllProjectsHeader"
import ShowAllProjects from "./ShowAllProjects"

const AllProjects = ({ loading, project }) => {
    return (
        <div className="w-[250px] h-full border-r border-gray-800 mb-10 overflow-y-scroll scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            <AllProjectsHeader></AllProjectsHeader>

            <ShowAllProjects loading={loading} project={project}></ShowAllProjects>

        </div>
    )
}

export default AllProjects