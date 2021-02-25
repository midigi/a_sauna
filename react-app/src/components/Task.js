import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import "./styling/TaskForm.css";

import { DeleteOutlined } from "@ant-design/icons";

const Task = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [visible, setVisible] = useState(false);
  const test = {
    taskTitle: "Upload to Github",
    dueDate: "04/03/2020",
    priority: "High",
    status: "In Progress",
    description: "blah blah",
  };
  function something(e) {}

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
      <Row>
        <Col span={7} className="column_border">
          <p className="task_title">{test.taskTitle}</p>
        </Col>

        <Col span={5} className="column_border">
          <p className="due_date">{test.dueDate}</p>
        </Col>

        <Col span={3} className="column_border">
          {taskType(test.priority)}
        </Col>

        <Col span={3} className="column_border">
          {statusType(test.status)}
        </Col>

        <Col span={3} className="column_border">
          <button className="task_title">Edit Desc.</button>
          {/* <textarea
                    className='task_description'
                    name='description'
                    type='text'
                    placeholder='Additional task information'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /> */}
        </Col>

        <Col span={3} className="column_border">
          <button className="task_submit_button" onClick={showDrawer}>
            More info
          </button>
          <Drawer
            title="Task Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={"50vh"}
            height={"100%"}
            bodyStyle={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>{test.taskTitle}</h1>
            <p>Some contents...</p>
            <div className="bottom_buttons">
              <Button type="primary">Mark Complete</Button>
              <Button type="primary" shape="circle">
                <DeleteOutlined />
              </Button>
            </div>
          </Drawer>
        </Col>
      </Row>
    </div>
  );
};

export default Task;
