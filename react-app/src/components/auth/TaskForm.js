import React, { useState } from "react";
import { createTask } from "../../store/task";

import { useDispatch, useSelector } from "react-redux";
import Task from "../../components/Task";
import { Row, Col } from "antd";
import "../styling/TaskForm.css";

import { useHistory } from "react-router-dom";


const PRIORITIES = ["Low", "Medium", "High"];

const STATUSES = ["Incomplete", "In Progress", "Need Help", "Complete"];

const TaskForm = () => {
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month.toString().length === 1) {
      month = "0" + month;
    }
    const day = currentDate.getDate();
    return `${year}-${month}-${day}`;
  }

  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [taskTitle, setTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState(getCurrentDate);
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Incomplete");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onTaskCreation = async (e) => {
    e.preventDefault();
    dispatch(createTask({ taskTitle, dueDate, priority, status, description }));
    await history.push("/");
  };


  return (
    sessionUser && (
      <div className="outside">
        <div style={{ marginBottom: "5vh" }}>
          {sessionUser.photoUrl != null ? (
            <img
              src={sessionUser.photoUrl}
              alt="UserPhoto"
              className="profile_picture"
            ></img>
          ) : (
            <img
              src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
              alt="Avatar"
              className="profile_picture"
            ></img>
          )}
          <h2 className="header">My Tasks</h2>
        </div>
        <div className="task_size">
          <Row>
            <Col span={7}>
              <h4>Title</h4>
            </Col>

            <Col span={5}>
              <h4>Due Date</h4>
            </Col>

            <Col span={3}>
              <h4>Priority</h4>
            </Col>

            <Col span={3}>
              <h4>Status</h4>
            </Col>
            <Col span={3}></Col>
            <Col span={3}>
              <h4>Actions</h4>
            </Col>

            <Col span={3}></Col>
          </Row>

          <form onSubmit={onTaskCreation}>
            <Row>
              <Col span={7} className="column_border">
                <input
                  className="task_title"
                  name="task_title"
                  type="text"
                  placeholder="Enter a task name"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </Col>
              <Col span={5} className="column_border">
                <input
                  className="due_date"
                  name="due_date"
                  type="date"
                  placeholder="2021-03-07"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </Col>
              <Col span={3} className="column_border">
                <select
                  className="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  {PRIORITIES.map((prio) => (
                    <option key={prio} value={prio}>
                      {prio}
                    </option>
                  ))}
                </select>
              </Col>
              <Col span={3} className="column_border">
                <select
                  className="task_status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {STATUSES.map((stat) => (
                    <option key={stat} value={stat}>
                      {stat}
                    </option>
                  ))}
                </select>
              </Col>
              <Col span={3} className="column_border"></Col>

              {/* <textarea
                  className="task_description"
                  name="description"
                  type="text"
                  placeholder="Additional task information"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                /> */}

              <Col span={3} className="column_border">
                <button className="task_submit_button" type="submit">
                  Create task
                </button>
              </Col>
            </Row>
          </form>
        </div>
        <Task />
      </div>
    )

  
  );
};

export default TaskForm;
