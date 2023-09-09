import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../../configs/chatbotConfig";
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";

const StudBot = () => {
    return (
        <>
            <div className="bot-container w-min mx-auto mt-20 p-10 bg-gray-300 rounded-lg">
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