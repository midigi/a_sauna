import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Menu, Dropdown } from "antd";
import LogoutButton from "./auth/LogoutButton";
import "antd/dist/antd.css";
import "./styling/NavBar.css";

const NavBar = ({ setAuthenticated }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
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
        <LogoutButton setAuthenticated={setAuthenticated} />
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <button className="hamburger" onClick={showDrawer}>
        🧑‍💼
      </button>
      <Dropdown overlay={menu}>
        <button className="profile_button" onClick={(e) => e.preventDefault()}>
          🧑‍
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
    </>
  );
};

export default NavBar;
