import User from "./user";

const Users = ({ users }) => {

    console.log(users);

    return (
        <div>

            {
                users.map((user, index) => <User key={index} user={user}></User>)
            }


        </div>
    )
}

export default Users