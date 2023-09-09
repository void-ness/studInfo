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

    const handleSlotOptions = () => {
        const botMessage = createChatBotMessage(
            "Pick a slot!",
            {
                widget: 'calendar',
                delay: 500,
            }
        );

        addMessageToState(botMessage)
    };

    const handleSlotBooking = (date, time) => {
        const botMessage = createClientMessage(
            `${date.date} ${date.month}, ${date.day} ${time.time}${time.label}`,
        );

        addMessageToState(botMessage)
    };

    const handleInputName = () => {
        const botMessage = createChatBotMessage(
            "Please Enter your name!",
            {
                widget: 'username',
                delay: 500
            }
        );

        addMessageToState(botMessage)
    }

    const handleUserName = (name) => {
        const botMessage = createClientMessage(
            `${name}`,
        );

        addMessageToState(botMessage)
    };

    const handleInputAge = () => {
        const botMessage = createChatBotMessage(
            "Please Enter your age!",
            {
                widget: 'age',
                delay: 500
            }
        );

        addMessageToState(botMessage)
    }

    const handleAge = (age) => {
        const botMessage = createClientMessage(
            `${age}`,
        );

        addMessageToState(botMessage)
    };

    const handleExit = () => {
        const botMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {
            widget: 'exit'
        });

        addMessageToState(botMessage);
    }

    const handleException = () => {
        const botMessage = createChatBotMessage("Kindly let me know what else I can help you with.");

        addMessageToState(botMessage);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        greet,
                        handleIntro,
                        handleSlotOptions, handleSlotBooking,
                        handleInputName, handleUserName,
                        handleInputAge, handleAge,
                        handleExit,
                        handleException,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;