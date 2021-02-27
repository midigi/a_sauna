import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import "./styling/TaskForm.css";
import { seeTask } from "../store/task";
import Info from "./Info";

import { DeleteOutlined } from "@ant-design/icons";

const Task = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionTasks = useSelector((state) => state.task.task);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(seeTask());
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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

  return (
    <div className="task_size">
      {sessionTasks &&
        sessionTasks.map((task) => (
          <Row key={task.id}>
            <Col span={7} className="column_border">
              <p className="task_title">{task.taskTitle}</p>
            </Col>

            <Col span={5} className="column_border">
              <p className="due_date">{task.dueDate}</p>
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
