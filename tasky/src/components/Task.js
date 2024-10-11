import React from 'react';

const Task = (props) => {
    // Directly determine the className for the card
    const taskClass = `card ${props.priority.toLowerCase()} ${props.done ? 'done' : ''}`;

    return (
        <div className={taskClass}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p>Priority: {props.priority}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>       
            <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
        </div>
    );
};

export default Task;