import React from 'react';
import { useHistory } from 'react-router';
import { Menu, Row, Col, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotTub } from '@fortawesome/free-solid-svg-icons';
import { login } from '../store/session';
import picture from '../images/peoples.jpg';
import './styling/SplashPage.css';
import { useDispatch } from 'react-redux';

const { Search } = Input;

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSearch = (value) => {
    console.log(value);
  };

  const demoLogin = async (e) => {
    await dispatch(login({ email: 'demo@asauna.com', password: 'password' }));
    history.push('');
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <h2 className="splash_header">
            <FontAwesomeIcon
              icon={faHotTub}
              style={{ marginRight: '0.5vh', color: '#35a7ff' }}
            />
            asauna
          </h2>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: 'right' }}>
          <Button onClick={demoLogin} type="primary">
            Try Asauna
          </Button>
        </Menu.Item>
        <Menu.Item key="2" style={{ float: 'right' }}>
          <NavLink to="login" style={{ margin: 'none' }}>
            <Button type="link">Login</Button>
          </NavLink>
        </Menu.Item>
      </Menu>

      <Row>
        <Col span={3}></Col>
        <Col span={8} className="left_content">
          <h1 className="splash_title">
            Get work done and
            <span style={{ color: '#1890ff' }}> relax</span> with Asauna.
          </h1>
          <p className="splash_text">
            Tasks and projects made easy, from inception to stand-up meeting.
            Asauna has got you covered.
          </p>
          <Search
            placeholder="name@email.com"
            enterButton="Sign Up"
            onSearch={onSearch}
            size="large"
            style={{ width: '80%', alignSelf: 'flex-start', marginTop: '5%' }}
          />
        </Col>
        <Col span={9}>
          <img src={picture} alt="Girl in a jacket" className="image"></img>
        </Col>
      </Row>
    </div>
  );
}

export default SplashPage;
