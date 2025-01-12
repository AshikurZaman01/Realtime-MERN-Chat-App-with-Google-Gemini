import ConversationArea from "./ConversationArea";
import Header from "./ChatHeader/Header";
import InputField from "./InputField";
import { useState } from "react";
import UserList from "./ChatHeader/UserList/UserList";

const ChatBody = ({ data }) => {

    const [isOpenUserSidebar, setIsOpenUserSidebar] = useState(false);
    const users = data?.item?.users;

    return (
        <section className="h-full min-w-96 bg-blue-950  overflow-y-scroll scrollbar-hide">

            <Header setIsOpenUserSidebar={setIsOpenUserSidebar} />

            <ConversationArea />
            <InputField />

            <UserList
                isOpenUserSidebar={isOpenUserSidebar}
                setIsOpenUserSidebar={setIsOpenUserSidebar}
                users={users}
            />

        </section>
    );
}

export default ChatBody;
