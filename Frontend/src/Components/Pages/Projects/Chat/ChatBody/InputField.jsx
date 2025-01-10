import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const InputField = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-2 w-full max-w-96 bg-white fixed bottom-0 left-0 right-0 mx-auto box-border">
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border-none focus:outline-none px-2 text-sm"
            />
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                <FaPaperPlane className="h-5 w-5" />
            </button>
        </div>
    );
};

export default InputField;
