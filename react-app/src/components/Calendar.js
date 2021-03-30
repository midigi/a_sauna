import React from "react";
import { Calendar, Badge } from "antd";
import "./styling/Calendar.css";
import "antd/dist/antd.css";

function Calender() {
  async function getTask(date) {
    const res = await fetch(`/api/tasks/${date}`);
    const data = await res.json();
    if (res.ok) {
    }
  }
  getTask("2021-02-24");

  function getListData(value) {
    let listData = [];
    const currentDate = value.year() + "-" + value.month() + "-" + value.date();
    // getTask(currentDate);
    // switch (value.date()) {
    //   case 8:
    //     listData = [
    //       { type: "warning", content: "This is warning event." },
    //       { type: "success", content: "This is usual event." },
    //     ];
    //     break;
    //   case 10:
    //     listData = [
    //       { type: "warning", content: "This is warning event." },
    //       { type: "success", content: "This is usual event." },
    //       { type: "error", content: "This is error event." },
    //     ];
    //     break;
    //   case 15:
    //     listData = [
    //       { type: "warning", content: "This is warning event" },
    //       {
    //         type: "success",
    //         content: "This is very long usual event。。....",
    //       },
    //       { type: "error", content: "This is error event 1." },
    //       { type: "error", content: "This is error event 2." },
    //       { type: "error", content: "This is error event 3." },
    //       { type: "error", content: "This is error event 4." },
    //     ];
    //     break;
    //   default:
    // }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <div className="calendar">
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}

export default Calender;
