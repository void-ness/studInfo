import React, { useState } from "react";

const Intro = (props) => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        props.actionProvider.handleIntro();
        props.actionProvider.handleSlotOptions();
        setVisible(false);
    }

    return (
        <>
            {visible &&
                <button className="bg-gray-300 w-fit py-1 px-2 ml-12 rounded-lg text-sm" onClick={handleClick}>
                    Got It!
                </button>
            }
        </>
    );
};

export default Intro;
