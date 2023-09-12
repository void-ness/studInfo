import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full lg:w-1/2 mx-auto pt-52 px-10">
            <div className="flex flex-col items-center bg-slate-100/25 py-20 px-5 rounded-xl shadow-lg">
                <span className="block text-center font-bold text-2xl text-slate-100">
                    Enter into student info system
                </span>

                <button className="border-2 w-fit p-2 rounded-lg bg-slate-200 mt-8 hover:font-bold hover:-translate-y-1 transition-all ease-in duration-100 hover:ease-out">
                    <Link to="/chatbot">
                        Enroll Now!
                    </Link>
                </button>
            </div>
        </div>
    )
};

export default Home;