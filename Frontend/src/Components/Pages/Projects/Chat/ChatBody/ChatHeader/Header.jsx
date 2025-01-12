import { RiGroupFill } from "react-icons/ri";

const Header = ({ setIsOpenUserSidebar }) => {

    const handleOpenAiSIdebar = () => {
        setIsOpenUserSidebar(true);
    }

    return (
        <div className="flex justify-between items-center p-4  bg-slate-700 border-b border-slate-600 w-full max-w-96  fixed top-0 left-0 right-0 mx-auto box-border z-10">
            <h1 className="text-xl font-semibold">Chat Room</h1>
            <button onClick={handleOpenAiSIdebar} className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                <RiGroupFill className="text-white text-2xl" />
            </button>
        </div>
    );
}

export default Header;