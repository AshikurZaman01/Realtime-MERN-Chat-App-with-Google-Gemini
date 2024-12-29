import { useContext } from "react"
import { UserContext } from "../../../ContextApi/user.context"

const Home = () => {

    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>Home</div>
    )
}

export default Home