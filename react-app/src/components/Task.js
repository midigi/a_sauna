import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styling/TaskForm.css";

const Task = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const test = {"taskTitle": "Low", "dueDate":'04/03/2020',"priority":'high',"status":'incomplete', "description":"blah blah"}
    function something(e){

    }

    return(
        <div className='task_form'>
                <div className='column_title'>
                    <p className='task_title'>{test.taskTitle}</p>
                </div>
                <div className='column_due_date'>
                    <input
                    className='due_date'
                    value={test.dueDate}
                    type='date'
                    // disabled='true'
                    />
                </div>
                <div className='column_priority'>
                    <p className='priority'>
                   {test.priority}
                    </p>
                </div>
                <div className='column_status'>
                    <p
                    className='task_status'
                    >{test.status}
                    </p>
                </div>
                <div className='column_description'>
                    <button>Description</button>
                    {/* <textarea
                    className='task_description'
                    name='description'
                    type='text'
                    placeholder='Additional task information'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    /> */}
                </div>
                <div className='column_task_submit '>
                    <button
                    className='task_submit_button'
                    type='submit'
                    >
                        More info
                    </button>
                </div>
            </div>
    )
}

export default Task;
