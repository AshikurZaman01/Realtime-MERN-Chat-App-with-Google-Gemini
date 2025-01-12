import { FaRegWindowClose } from "react-icons/fa";
import Users from "../../../../../Home/Users/Users";

const UserList = ({ isOpenUserSidebar, setIsOpenUserSidebar, users }) => {

    return (
        <div
            className={`
                fixed bottom-0 w-full max-w-96 h-full bg-gray-400 rounded-sm
                transition-transform duration-300 ease-in-out z-20
                ${isOpenUserSidebar ? 'right-[-500]' : 'translate-x-full right-0'}
            `}
        >
            <div className="flex justify-end p-3 bg-white">
                <button
                    onClick={() => setIsOpenUserSidebar(false)}
                    className="transition-transform transform hover:scale-110 active:scale-90"
                >
                    <FaRegWindowClose className="text-gray-600 hover:text-gray-800" size="16" />
                </button>
            </div>


            <div className="overflow-x-scroll scrollbar-hide h-[calc(100%-3rem)]">
                <Users users={users}></Users>
            </div>


        </div>
    )
}

export default UserList;
