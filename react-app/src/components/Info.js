import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import "./styling/TaskForm.css";
import "./styling/Info.css";

import { DeleteOutlined, CalendarTwoTone } from "@ant-design/icons";

const Info = ({ task }) => {
  const [visible, setVisible] = useState(false);

  console.log(task);

  const showDrawer = ({ task }) => {
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
    task !== undefined && (
      <div>
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
          <h1 className="task_info_title">{task.taskTitle}</h1>
          <h4 className="task_menu_text">
            Due date: {task.dueDate.slice(0, 16)} <CalendarTwoTone />
          </h4>
          <h4 className="task_menu_text">Projects:</h4>
          <h4 className="task_menu_text">
            Priority: {taskType(task.priority)}
          </h4>
          <h4 className="task_menu_text">Status: {statusType(task.status)}</h4>
          <div className="bottom_buttons">
            <Button type="primary">Mark Complete</Button>
            <Button type="primary" shape="circle">
              <DeleteOutlined />
            </Button>
          </div>
        </Drawer>
      </div>
    )
  );
};

export default Info;
