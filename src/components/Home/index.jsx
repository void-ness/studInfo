import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center w-1/2 mx-auto mt-52">
            <span className="block text-center font-bold text-2xl">
                Enter into student Info system.
            </span>

            <button className="border-2 w-fit p-2 rounded-lg bg-gray-200 mt-4 hover:font-bold">
                <a href="/chatbot">
                    Enroll Now!
                </a>
            </button>
        </div>
    )
};

export default Home;