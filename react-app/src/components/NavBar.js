import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Menu, Dropdown } from "antd";
import LogoutButton from "./auth/LogoutButton";
import "antd/dist/antd.css";
import "./styling/NavBar.css";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/profile" exact={true} activeClassName="active">
          Profile
        </NavLink>
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
        mask={false}
      >
        <ul className="drawer_links">
          <li>
            <NavLink
              className="drawer_link"
              to="/"
              exact={true}
              activeClassName="active"
            >
              🏠 Home
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
