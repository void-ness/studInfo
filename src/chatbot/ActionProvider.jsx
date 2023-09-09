import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const addMessageToState = (message) => {
        setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    const greet = () => {
        const botMessage = createChatBotMessage(`Hello, Welcome to student info system!`,
            {
                widget: 'intro'
            }
        );

        addMessageToState(botMessage);
    }

    const handleIntro = () => {
        const botMessage = createClientMessage('Got it!');

        addMessageToState(botMessage);
    };

    const handleSlot = () => {
        const botMessage = createChatBotMessage(
            "Pick a slot!",
            {
                widget: 'dogPicture',
            }
        );

        addMessageToState(botMessage)
    };

    const handleException = () => {
        const botMessage = createChatBotMessage("Kindly let me know what else I can help you with.");

        addMessageToState(botMessage);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { greet, handleIntro, handleSlot, handleException },
                });
            })}
        </div>
    );
};

export default ActionProvider;