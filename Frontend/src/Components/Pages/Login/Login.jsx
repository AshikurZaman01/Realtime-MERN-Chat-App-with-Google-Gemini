import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../Config/Axios";
import { FaSpinner } from 'react-icons/fa'

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        try {
            const response = await axiosInstance.post("users/loginUser", user);
            if (response.data.success) {
                alert(response.data.message);
                navigate('/')
            }

        } catch (error) {
            console.log("Error : ", error);
            setErrorMessage(error.response?.data?.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-100">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 text-sm text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-gray-600 bg-gray-700 placeholder-gray-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 text-sm text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-gray-600 bg-gray-700 placeholder-gray-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        {loading ? <FaSpinner className="animate-spin mx-auto" /> : 'Login'}
                    </button>
                </form>
                {errorMessage && <p className="text-center text-red-500 text-sm mt-2">{errorMessage}</p>}

                <p className="mt-4 text-sm text-center text-gray-400">
                    Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Create one</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;
