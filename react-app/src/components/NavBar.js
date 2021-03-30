import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Menu, Dropdown, Modal, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotTub, faSquare } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./auth/LogoutButton";
import Calender from "./Calendar";
import { photoUpload } from "../store/session";
import RecentProjects from "./RecentProjects";
import "antd/dist/antd.css";
import "./styling/NavBar.css";

import {
  HomeOutlined,
  SmileOutlined,
  SnippetsOutlined,
  CalendarOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState("hidden");
  const [photoFile, setPhotoFile] = useState();
  const [projects, setProjects] = useState();
  const [bio, setBio] = useState("visible");
  const [photoUrl, setPhotoUrl] = useState(
    sessionUser ? sessionUser.photoUrl : ""
  );

  const changeBio = () => {
    if (bio === "hidden") {
      setBio("visible");
    }
    if (bio === "visible") {
      setBio("hidden");
    }
  };

  // let projects;
  const dispatch = useDispatch();

  const getAllProjects = async () => {
    const res = await fetch("/api/projects/user");
    const data = await res.json();
    if (res.ok) {
      setProjects(data.projects);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [dispatch]);

  function handleUpload(e) {
    setPhotoFile(e.target.files[0]);
  }

  function submit(e) {
    e.preventDefault();
    dispatch(photoUpload(photoFile)).then((res) => {
      setPhotoUrl(res.url);
    });
  }

  const showButtonVisible = () => {
    if (buttonVisible === "visible") {
      setButtonVisible("hidden");
    }
    if (buttonVisible === "hidden") {
      setButtonVisible("visible");
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={showModal}>
          My Profile <SmileOutlined />
        </Button>
      </Menu.Item>
      <Menu.Item>
        <LogoutButton />
      </Menu.Item>
    </Menu>
  );

  const addMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/tasks" exact={true} activeClassName="active">
          Task
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/project" exact={true} activeClassName="active">
          Project
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  return (
    sessionUser && (
      <div style={{ width: "100%", height: "5vh" }}>
        <Modal
          title="My Profile"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={showButtonVisible}>
              Edit Profile
            </Button>,
            <Button key="submit" type="primary" onClick={submit}>
              Submit Changes
            </Button>,
          ]}
          width="75vh"
        >
          <div className="modal_title">
            {photoUrl != null ? (
              <img src={photoUrl} alt="UserPhoto" className="profile_pic"></img>
            ) : (
              <img
                src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                alt="Avatar"
                className="profile_pic"
              ></img>
            )}

            <div className="modal_username">
              <h3 className="firstname">{sessionUser.firstName}</h3>
              <p className="lastname">{sessionUser.lastName}</p>
            </div>
            <div style={{ visibility: buttonVisible }}>
              <form encType="multipart/form-data" onSubmit={submit}>
                <input
                  id="myuniqueid"
                  type="file"
                  name="user_file"
                  onChange={handleUpload}
                ></input>
                <label for="myuniqueid">Upload Photo</label>
                {/* <button type="submit"></button> */}
              </form>
            </div>
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <h4 className="about_title">About Me</h4>
            <Button
              shape="circle"
              style={{ marginTop: "0.5vh", marginLeft: "2vh" }}
              onClick={changeBio}
            >
              <EditOutlined />
            </Button>
          </div>
          {bio === "visible" ? (
            <p className="about_me">{sessionUser.about}</p>
          ) : (
            <textarea className="profile_textarea"></textarea>
          )}
        </Modal>
        <button className="hamburger" onClick={showDrawer}>
          <span>
            <FontAwesomeIcon icon={faHotTub} className="hamburger" />
          </span>
        </button>
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <Button
            className="profile_button"
            shape="circle"
            type="primary"
            onClick={(e) => e.preventDefault()}
          >
            {sessionUser && (
              <p>
                {sessionUser.firstName[0].toUpperCase() +
                  sessionUser.lastName[0].toUpperCase()}
              </p>
            )}
          </Button>
        </Dropdown>
        <Dropdown
          overlay={addMenu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <Button
            className="profile_button"
            onClick={(e) => e.preventDefault()}
          >
            <PlusOutlined />
          </Button>
        </Dropdown>
        <Drawer
          title={
            <div>
              <FontAwesomeIcon
                icon={faHotTub}
                style={{ marginRight: "0.5vh" }}
              />{" "}
              asauna
            </div>
          }
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <ul className="drawer_links">
            <li>
              <NavLink
                className="drawer_link"
                to="/"
                exact={true}
                activeClassName="active"
                onClick={onClose}
              >
                <HomeOutlined /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="drawer_link"
                to="/tasks"
                exact={true}
                activeClassName="active"
                onClick={onClose}
              >
                <SnippetsOutlined /> Tasks
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className="drawer_link"
                to="/calendar"
                exact={true}
                activeClassName="active"
                onClick={onClose}
              >
                <CalendarOutlined /> Calendar
              </NavLink>
            </li> */}
          </ul>
          <div>
            <NavLink
              to="/project"
              exact={true}
              activeClassName="active"
              onClick={onClose}
            >
              <h4 className="drawer_text">
                New Project <PlusOutlined />
              </h4>
            </NavLink>
            <h4 className="drawer_text">My Projects:</h4>

            {projects &&
              projects.map((project) => {
                let color = "#35a7ff";
                if (project.color) {
                  color = project.color;
                }
                return (
                  <NavLink onClick={onClose} to={`/project/${project.id}`}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FontAwesomeIcon
                        icon={faSquare}
                        className="squircle"
                        style={{ color: color }}
                      />
                      <p onClick={onClose} className="drawer_text">
                        {project.projectName}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
          </div>
        </Drawer>
      </div>
    )
  );
};

export default NavBar;
