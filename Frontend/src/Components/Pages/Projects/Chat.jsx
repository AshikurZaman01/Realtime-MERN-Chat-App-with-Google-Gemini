import { useLocation } from "react-router-dom"

const Chat = () => {

    const location = useLocation();
    console.log(location.state);

    return (
        <div>Chat</div>
    )
}

export default Chat