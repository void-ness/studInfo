import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../widgets/DogPicture/DogPicture";
import Intro from "../widgets/Intro/Intro";

const botName = 'Student Info Bot';

const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hello, Welcome to student info system!`,
            {
                widget: 'intro'
            }
        )
    ],
    widgets: [
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => DogPicture,
        },
        {
            widgetName: 'intro',
            widgetFunc: (props) => <Intro {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
}

export default config

// import React from "react";
// import { createChatBotMessage } from "react-chatbot-kit";

// import Overview from "../components/widgets/Overview/Overview";
// import MessageParser from "../components/widgets/MessageParser/MessageParser";
// import ActionProviderDocs from "../components/widgets/ActionProvider/ActionProviderDocs";

// const botName = "DocsBot";

// const config = {
//     botName: botName,
//     lang: "no",
//     customStyles: {
//         botMessageBox: {
//             backgroundColor: "#376B7E",
//         },
//         chatButton: {
//             backgroundColor: "#5ccc9d",
//         },
//     },
//     initialMessages: [
//         createChatBotMessage(
//             `Hi I'm ${botName}. I’m here to help you explain how I work.`
//         ),
//         createChatBotMessage(
//             "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
//             {
//                 withAvatar: false,
//                 delay: 500,
//                 widget: "overview",
//             }
//         ),
//     ],
//     state: {
//         gist: "",
//     },
//     customComponents: {},
//     widgets: [
//         {
//             widgetName: "overview",
//             widgetFunc: (props) => <Overview {...props} />,
//             mapStateToProps: ["gist"],
//         },
//         {
//             widgetName: "messageParser",
//             widgetFunc: (props) => <MessageParser {...props} />,
//             mapStateToProps: ["gist"],
//         },
//         {
//             widgetName: "actionProviderDocs",
//             widgetFunc: (props) => <ActionProviderDocs {...props} />,
//             mapStateToProps: ["gist"],
//         },
//     ],
// };

// export default config;