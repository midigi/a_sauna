import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Tag } from "antd";
import "./styling/TaskForm.css";
import { seeTask, seeProjectTask } from "../store/task";
import Info from "./Info";

const Task = ({ id }) => {
  const dispatch = useDispatch();
  const sessionTasks = useSelector((state) => state.task.task);
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) {
      dispatch(seeTask());
    } else {
      dispatch(seeProjectTask(id));
      setData(id);
    }
  }, [id]);

  const taskType = (task) => {
    if (task === "Low") {
      return <Tag color="green">{task}</Tag>;
    } else if (task === "Medium") {
      return <Tag color="orange">{task}</Tag>;
    } else if (task === "High") {
      return <Tag color="red">{task}</Tag>;
    }
  };

  const statusType = (status) => {
    if (status === "Incomplete") {
      return <Tag color="red">{status}</Tag>;
    } else if (status === "In Progress") {
      return <Tag color="purple">{status}</Tag>;
    } else if (status === "Complete") {
      return <Tag color="green">{status}</Tag>;
    } else if (status === "Need Help") {
      return <Tag color="magenta">{status}</Tag>;
    }
  };

  function getCurrentDate(timeString) {
    let currentDate = new Date(timeString);
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month.toString().length === 1) {
      month = "0" + month;
    }
    const day = currentDate.getDate();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="task_size">
      {sessionTasks &&
        sessionTasks.map((task) => (
          <Row key={task.id}>
            <Col span={7} className="column_border">
              <p className="task_title">{task.taskTitle}</p>
            </Col>

            <Col span={5} className="column_border">
              <p className="due_date">{getCurrentDate(task.dueDate)}</p>
            </Col>

            <Col span={3} className="column_border">
              {taskType(task.priority)}
            </Col>

            <Col span={3} className="column_border">
              {statusType(task.status)}
            </Col>

            <Col span={3} className="column_border"></Col>

            <Col span={3} className="column_border">
              <Info task={task}></Info>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default Task;
