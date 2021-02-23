import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Menu, Dropdown, Modal } from "antd";
import LogoutButton from "./auth/LogoutButton";
import "antd/dist/antd.css";
import "./styling/NavBar.css";

const NavBar = () => {
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
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
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
    <div style={{ width: "100%", height: "5vh" }}>
      <Modal
        title="My Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="75vh"
      >
        <div className="modal_title">
          <img
            src="https://user-images.githubusercontent.com/70561117/108804980-ae2f4180-7553-11eb-8240-9746d71ad242.png"
            alt="Avatar"
            className="profile_picture"
          ></img>
          <div className="modal_username">
            <h3 className="firstname">Firstname</h3>
            <p className="lastname">Lastname</p>
          </div>
        </div>
        <h4>About Me</h4>
        <p>Some contents...</p>
      </Modal>
      <button className="hamburger" onClick={showDrawer}>
        🧑‍💼
      </button>
      <Dropdown overlay={profileMenu} trigger={["click"]}>
        <button className="profile_button" onClick={(e) => e.preventDefault()}>
          🧑‍
        </button>
      </Dropdown>
      <Dropdown overlay={addMenu} trigger={["click"]} placement="bottomCenter">
        <button className="profile_button" onClick={(e) => e.preventDefault()}>
          ➕
        </button>
      </Dropdown>
      <Drawer
        title="Asauna"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        // mask={false}
        maskClosable={true}
      >
        <ul className="drawer_links">
          <li>
            <NavLink
              className="drawer_link"
              to="/"
              exact={true}
              activeClassName="active"
            >
               Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="drawer_link"
              to="/login"
              exact={true}
              activeClassName="active"
            >
              📲 Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="drawer_link"
              to="/sign-up"
              exact={true}
              activeClassName="active"
            >
              ⬆️ Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              className="drawer_link"
              to="/users"
              exact={true}
              activeClassName="active"
            >
              🧍‍♂️ Users
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default NavBar;
