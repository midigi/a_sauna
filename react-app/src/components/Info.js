import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import "./styling/TaskForm.css";
import "./styling/Info.css";
import {
  deleteTask,
  seeTask,
  markComplete,
  seeProjectTask,
} from "../store/task";

import { DeleteOutlined, CalendarTwoTone } from "@ant-design/icons";

const Info = ({ task }) => {
  const [visible, setVisible] = useState(false);
  const [desc, setDesc] = useState();
  const [editVisibility, setEditVisibility] = useState(false);
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();

  const taskId = task.id;
  const projectID = task.projectId;

  const dispatch = useDispatch();

  function editForm() {
    if (editVisibility === false) {
      setEditVisibility(true);
    }
    if (editVisibility === true) {
      setEditVisibility(false);
    }
  }

  const onTaskUpdate = async (e) => {
    e.preventDefault();
    task = { desc, priority, status };
    const res = await fetch(`/api/tasks/update/${taskId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    if (projectID) {
      dispatch(seeProjectTask(projectID));
    } else {
      dispatch(seeTask());
    }
  };

  async function deleteOneTask() {
    await dispatch(deleteTask(task.id));
    if (projectID) {
      dispatch(seeProjectTask(projectID));
    } else {
      dispatch(seeTask());
    }
  }

  const showDrawer = ({ task }) => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setEditVisibility(false);
  };

  const taskType = (task) => {
    if (task === "Low") {
      return (
        <Tag onClick={() => setPriority("Low")} color="green">
          {task}
        </Tag>
      );
    } else if (task === "Medium") {
      return (
        <Tag onClick={() => setPriority("Medium")} color="orange">
          {task}
        </Tag>
      );
    } else if (task === "High") {
      return (
        <Tag onClick={() => setPriority("High")} color="red">
          {task}
        </Tag>
      );
    }
  };

  const statusType = (status) => {
    if (status === "Incomplete") {
      return (
        <Tag onClick={() => setStatus("Incomplete")} color="red">
          {status}
        </Tag>
      );
    } else if (status === "In Progress") {
      return (
        <Tag onClick={() => setStatus("In Progress")} color="purple">
          {status}
        </Tag>
      );
    } else if (status === "Complete") {
      return (
        <Tag onClick={() => setStatus("Complete")} color="green">
          {status}
        </Tag>
      );
    } else if (status === "Need Help") {
      return (
        <Tag onClick={() => setStatus("Need Help")} color="magenta">
          {status}
        </Tag>
      );
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
          <form onSubmit={onTaskUpdate}>
            <h1 className="task_info_title">{task.taskTitle}</h1>
            <h4 className="task_menu_text">
              Due date: {task.dueDate.slice(0, 16)} <CalendarTwoTone />
            </h4>
            <h4 className="task_menu_text">Projects:</h4>
            <h4 className="task_menu_text">
              Priority: {taskType(task.priority)}
            </h4>
            {editVisibility && (
              <div className="choose_status">
                <button className="status_button" value="Low">
                  {taskType("Low")}
                </button>
                <button className="status_button" value="Medium">
                  {taskType("Medium")}
                </button>
                <button className="status_button" value="High">
                  {taskType("High")}
                </button>
              </div>
            )}
            <h4 className="task_menu_text">
              Status: {statusType(task.status)}
            </h4>
            {editVisibility && (
              <div className="choose_status">
                <button className="status_button" value="Incomplete">
                  {statusType("Incomplete")}
                </button>
                <button className="status_button" value="In Progress">
                  {statusType("In Progress")}
                </button>
                <button className="status_button" value="Need Help">
                  {statusType("Need Help")}
                </button>
                <button className="status_button" value="Complete">
                  {statusType("Complete")}
                </button>
              </div>
            )}
            <h4 className="task_menu_text">Description:</h4>

            {editVisibility ? (
              <textarea
                className="task_menu_textarea"
                placeholder="Enter a description"
                onChange={(e) => setDesc(e.target.value)}
              >
                {task.description}
              </textarea>
            ) : (
              <p>{task.description}</p>
            )}

            <div className="bottom_buttons">
              <div>
                <Button type="primary" onClick={editForm}>
                  Edit Task
                </Button>
                {editVisibility && (
                  <Button htmlType="submit">Submit Edits</Button>
                )}
              </div>
              <Button type="primary" shape="circle" onClick={deleteOneTask}>
                <DeleteOutlined />
              </Button>
            </div>
          </form>
        </Drawer>
      </div>
    )
  );
};

export default Info;
