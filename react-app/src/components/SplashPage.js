import React from "react";
import { Menu, Row, Col, Button } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import "./styling/SplashPage.css";


function SplashPage() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <h2 className="splash_header">
            <FontAwesomeIcon
              icon={faHotTub}
              style={{ marginRight: "0.5vh", color: "#35a7ff" }}
            />
            asauna
          </h2>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: "right" }}>
          <NavLink to="sign-up" style={{ margin: "none" }}>
            <Button type="primary">Try Asauna</Button>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" style={{ float: "right" }}>
          <NavLink to="login" style={{ margin: "none" }}>
            <Button type="link">Login</Button>
          </NavLink>
        </Menu.Item>
      </Menu>

      <Row>
        <Col span={12} className="left_content">
          <h1 className="splash_title">
            Get your work done and relax with Asauna.
          </h1>
          <hr className="divider"></hr>
          <p className="splash_text">
            Tasks and projects made easy, from inception to stand-up meeting.
            Asauna has got you covered.
          </p>
          <NavLink to="sign-up" className="splash_button">
            <Button type="primary" shape="round">
              Try Asauna
            </Button>
          </NavLink>
        </Col>
        <Col span={12}>
          <div className="image"></div>
        </Col>
      </Row>
    </div>
  );
}

export default SplashPage;
