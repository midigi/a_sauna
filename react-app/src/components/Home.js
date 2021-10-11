import React from 'react';
import { Collapse } from 'antd';
import Task from './Task';
import TaskHeaders from './TaskHeaders';
import RecentProjects from './RecentProjects';
import Footer from './Footer';
import './styling/Home.css';
import 'antd/dist/antd.css';
const { Panel } = Collapse;

function Home() {
  return (
    <>
      <div className="main_content">
        <Collapse bordered={false} className="collapse">
          <Panel header="Tasks due soon">
            <TaskHeaders></TaskHeaders>
            <Task></Task>
          </Panel>
        </Collapse>
        <Collapse
          defaultActiveKey={['1']}
          bordered={false}
          className="collapse"
        >
          <Panel header="Recent Projects" key="1">
            <RecentProjects></RecentProjects>
          </Panel>
        </Collapse>
      </div>
      <Footer />
    </>
  );
}
export default Home;
