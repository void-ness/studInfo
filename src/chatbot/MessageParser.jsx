import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        const lowercase = message.toLowerCase();

        if (lowercase.includes("hello")) {
            actions.greet();
            return;
        }

        if (lowercase == "got it!") {
            actions.handleSlot();
            return;
        }

        else {
            actions.handleException();
            return;
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;