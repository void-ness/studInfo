import { createChatBotMessage } from "react-chatbot-kit";
import Intro from "../widgets/Intro/Intro";
import Calendar from "../widgets/Calendar";
import UserName from "../widgets/UserName";
import UserAge from "../widgets/UserAge";
import Exit from "../widgets/Exit";

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
            widgetName: 'intro',
            widgetFunc: (props) => <Intro {...props} />,
        },
        {
            widgetName: 'calendar',
            widgetFunc: (props) => <Calendar {...props} />
        },
        {
            widgetName: 'username',
            widgetFunc: (props) => <UserName {...props} />
        },
        {
            widgetName: 'age',
            widgetFunc: (props) => <UserAge {...props} />
        },
        {
            widgetName: 'exit',
            widgetFunc: (props) => <Exit {...props} />
        }
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#89c1ff',
        },
        chatButton: {
            backgroundColor: '#004086',
        },
    },
}

export default config