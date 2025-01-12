import { useLocation } from "react-router-dom";
import ChatBody from "./ChatBody/ChatBody";

const Chat = () => {

    const location = useLocation();
    const state = location.state || {};

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-slate-900 relative">
            <ChatBody data={state} />
        </main>
    )
}

export default Chat;
