import { useEffect, useRef } from "react";

const ConversationArea = () => {

    const conversationEndMsgRef = useRef(null);

    useEffect(() => {
        if (conversationEndMsgRef.current) {
            conversationEndMsgRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])


    return (
        <div className="text-white mt-20 mb-14">


            <div className="chat chat-start incoming01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-start incoming02">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>

            <div className="chat chat-end send01">
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50 ml-4">2 hours ago</time>
                </div>
                <div className="chat-bubble chat-bubble-info">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
            </div>


            <div ref={conversationEndMsgRef}></div>
        </div>
    )
}

export default ConversationArea