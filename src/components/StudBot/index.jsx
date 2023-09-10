import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../../configs/chatbotConfig";
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";

const StudBot = () => {
    return (
        <>
            <div className="bot-container w-min mx-auto pt-20 scale-110">
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
        </>
    )
};

export default StudBot;