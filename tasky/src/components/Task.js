import React from 'react';

const Task = (props) => {
    // Safeguard against undefined priority
    const priority = props.priority ? props.priority.toLowerCase() : 'low';

    // Directly determine the className for the card
    const taskClass = `card ${priority} ${props.done ? 'done' : ''}`;

    return (
        <div className={taskClass}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p>Priority: {props.priority || 'Low'}</p> {/* Fallback for display */}
            <button onClick={props.markDone} className="doneButton">Done</button>       
            <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
        </div>
    );
};

export default Task;
