import React from "react";

import "./Sidebar.css";

const Sidebar = ({ gridMode, changeGridMode }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <div className="sidebar_flex-wrapper">
          <img
            src="https://images.pexels.com/photos/274595/pexels-photo-274595.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt="Active User"
            className="sidebar_img"
          />
          <div>
            <h2 className="secondary_heading">Hi, Reader</h2>
            <p>Here's your News</p>
          </div>
        </div>
      </div>
      <div className="sidebar_item">
        <h1 className="primary_heading">View Toggle</h1>
        <div className="toggle-views">
          <span
            onClick={() => changeGridMode()}
            className={gridMode ? "toggle toggle-active" : "toggle"}
          >
            <ion-icon name="grid-outline"></ion-icon>
          </span>
          <span
            onClick={() => changeGridMode()}
            className={!gridMode ? "toggle toggle-active" : "toggle"}
          >
            <ion-icon name="list-outline"></ion-icon>
          </span>
        </div>
      </div>
      <div className="sidebar_item">
        <h1 className="primary_heading">Have A Feedback?</h1>
        <p className="sidebar_paragraph">We are listening</p>
      </div>
    </div>
  );
};

export default Sidebar;
