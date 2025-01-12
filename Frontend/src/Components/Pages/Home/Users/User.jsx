const User = ({ user }) => {
    return (
        <div className="flex items-center mt-4 ml-4 mr-4 cursor-pointer mb-6 gap-4 p-4 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">

            <div className="hover:scale-105 transition-transform duration-300">
                <img
                    src={user?.avatar || "https://img.freepik.com/premium-photo/flat-icon-isolated-background_1375069-5555.jpg?ga=GA1.1.1399524707.1729683193&semt=ais_hybrid"}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-800">{user?.name || "UserName"}</h3>
                <p className="text-sm text-gray-500">{user?.email || "user@example.com"}</p>
            </div>
        </div>
    )
}

export default User;