import React from "react";
import { Row, Col } from "antd";
import "./auth/authStyling/form.css";

const TaskHeaders = () => {
  return (
    <div className="task_size">
      <Row>
        <Col span={7}>
          <h4>Title</h4>
        </Col>

        <Col span={5}>
          <h4>Due Date</h4>
        </Col>

        <Col span={3}>
          <h4>Priority</h4>
        </Col>

        <Col span={3}>
          <h4>Status</h4>
        </Col>
        <Col span={3}></Col>
        <Col span={3}>
          <h4>Actions</h4>
        </Col>

        <Col span={3}></Col>
      </Row>
    </div>
  );
};

export default TaskHeaders;
