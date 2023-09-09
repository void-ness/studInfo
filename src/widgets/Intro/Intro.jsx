import React from "react";

const Intro = (props) => {
    const handleClick = () => {
        props.actions.handleIntro();
    }

    return (
        <button className="bg-gray-300 w-fit py-1 px-2 ml-12 rounded-lg text-sm" onClick={handleClick}>
            Got It!
        </button>
    );
};

export default Intro;
