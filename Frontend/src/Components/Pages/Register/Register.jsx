import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-100">Register</h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 text-sm text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 border-gray-600 bg-gray-700 placeholder-gray-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Email
                        </label>
                        <input
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
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-400">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
