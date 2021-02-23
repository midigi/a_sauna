import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Drawer, Menu, Dropdown, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./auth/LogoutButton";
import "antd/dist/antd.css";
import "./styling/NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <button onClick={showModal}> Profile </button>
      </Menu.Item>
      <Menu.Item danger>
        <LogoutButton />
      </Menu.Item>
    </Menu>
  );

  const addMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/task" exact={true} activeClassName="active">
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
          width="75vh"
        >
          <div className="modal_title">
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

            <div className="modal_username">
              <h3 className="firstname">{sessionUser.firstName}</h3>
              <p className="lastname">{sessionUser.lastName}</p>
            </div>
          </div>
          <h4>About Me</h4>
          <p>{sessionUser.about}</p>
        </Modal>
        <button className="hamburger" onClick={showDrawer}>
          <span>
            <FontAwesomeIcon icon={faHotTub} className="hamburger" />
          </span>
        </button>
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <button
            className="profile_button"
            onClick={(e) => e.preventDefault()}
          >
            {sessionUser.photoUrl != null ? (
              <img
                src={sessionUser.photoUrl}
                alt="UserPhoto"
                className="button_picture"
              ></img>
            ) : (
              <img
                src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
                alt="Avatar"
                className="button_picture"
              ></img>)}
          </button>
        </Dropdown>
        <Dropdown
          overlay={addMenu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <button
            className="profile_button"
            onClick={(e) => e.preventDefault()}
          >
            {/* ➕ */}
          </button>
        </Dropdown>
        <Drawer
          title="Asauna"
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
              >
                {/* 🏠 Home */}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="drawer_link"
                to="/login"
                exact={true}
                activeClassName="active"
              >
                {/* 📲 Login */}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="drawer_link"
                to="/sign-up"
                exact={true}
                activeClassName="active"
              >
                {/* ⬆️ Sign Up */}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="drawer_link"
                to="/users"
                exact={true}
                activeClassName="active"
              >
                {/* 🧍‍♂️ Users */}
              </NavLink>
            </li>
          </ul>
        </Drawer>
      </div>
    )
  );
};

export default NavBar;
