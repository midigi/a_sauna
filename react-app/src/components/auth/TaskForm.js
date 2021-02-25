import React, { useState } from "react";
import { createTask } from "../../store/task";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const PRIORITIES = ["Low", "Medium", "High"];

const STATUSES = ["Incomplete", "In Progress", "Need Help", "Complete"];

const currentTime = new Date().toISOString();

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("New Task");
  const [dueDate, setDueDate] = useState(currentTime);
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Incomplete");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(currentTime);

  const onTaskCreation = async (e) => {
    e.preventDefault();
    dispatch(createTask({ taskTitle, dueDate, priority, status, description }));
    await history.push("/");
  };

  return (
    <div className="outer_box">
      <form onSubmit={onTaskCreation} className="task_form">
        <div>Add Task</div>
        <div>
          <input
            name="task_title"
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            name="due_date"
            type="date"
            placeholder="2021-03-07"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((prio) => (
              <option key={prio} value={prio}>
                {prio}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUSES.map((stat) => (
              <option key={stat} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="description"
            type="text"
            placeholder="Additional task information"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="task_submit_button" type="submit">
          Create task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
