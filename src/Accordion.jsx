/* eslint-disable react/prop-types */
import { useState } from "react";

const faqs = [
    {
        title: " How do I create a new task?",
        text:
        "To create a new task, simply click on the “Add Task” button located on your dashboard. Fill in the task details, such as the title, description, due date, and priority level. Once you’ve entered all the information, click “Save” to add it to your task list."
    },
    {
        title: "Can I set reminders for my tasks?",
        text:
        "Yes! You can set reminders for individual tasks. When creating or editing a task, look for the “Reminders” option. You can choose to receive notifications via email or push notifications on your device at your preferred time before the task is due."
    },

    {
        title: "How do I prioritize my tasks?",
        text:
        "You can prioritize tasks by assigning them a priority level (e.g., High, Medium, Low) when creating or editing a task. You can also drag and drop tasks in your list to rearrange them based on your priorities."
    },

    {
        title: "Is there a way to collaborate with team members?",
        text:
        "Absolutely! You can invite team members to collaborate on projects by sharing specific tasks or entire projects with them. Simply go to the project settings and enter their email addresses to send invitations. They will receive access to view and edit tasks as needed."
    },

    {
        title: "What should I do if I forget my password?",
        text:
        "If you forget your password, click on the “Forgot Password?” link on the login page. Enter your registered email address, and you will receive instructions on how to reset your password via email."
    }
];


export default function App() {
    return (
    <div>
        <Accordion data={faqs} />
    </div>
);
}

function Accordion({ data }) {
return (
    <div className="accordion">
        {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
    ))}
    </div>
);
}

function AccordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
}

return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

    {isOpen && <div className="content-box">{text}</div>}
    </div>
);
}
