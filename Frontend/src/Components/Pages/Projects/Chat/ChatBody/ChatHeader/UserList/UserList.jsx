import { FaRegWindowClose } from "react-icons/fa";

const UserList = ({ isOpenUserSidebar, setIsOpenUserSidebar }) => {
    return (
        <div
            className={`
                fixed bottom-0 h-72 w-full max-w-96 bg-gray-400 rounded-sm
                transition-transform duration-300 ease-in-out z-20
                ${isOpenUserSidebar ? 'right-[-500]' : 'translate-x-full right-0'}
            `}
        >
            <div className="flex justify-end p-3">
                <button
                    onClick={() => setIsOpenUserSidebar(false)}
                    className="transition-transform transform hover:scale-110 active:scale-90"
                >
                    <FaRegWindowClose className="text-gray-600 hover:text-gray-800" size="16" />
                </button>
            </div>
        </div>
    )
}

export default UserList;
