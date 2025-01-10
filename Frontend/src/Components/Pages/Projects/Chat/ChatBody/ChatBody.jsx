import ConversationArea from "./ConversationArea";
import Header from "./Header";
import InputField from "./InputField";

const ChatBody = ({ data }) => {
    return (
        <section className="h-full min-w-96 bg-blue-950  overflow-y-scroll scrollbar-hide">
            <Header />
            <ConversationArea />
            <InputField />
        </section>
    );
}

export default ChatBody;
