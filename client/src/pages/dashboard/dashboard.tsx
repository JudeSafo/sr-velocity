import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./dashboard.css";
import Hamburger from "hamburger-react"

const Dashboard: React.FC = () => {
  const [title, setTitle] = useState("Streaming - A");

  return (
    <div id='dashboard'>
      <ProSidebar>
        <SidebarHeader>{
          "Collapse Button(?)"}</SidebarHeader>
        <Menu iconShape="square">
          <SubMenu defaultOpen={true} title="Streaming">
            <MenuItem onClick={() => {
              setTitle("Streaming - A")
            }}>A</MenuItem>
            <MenuItem onClick={() => {
              setTitle("Streaming - B")
            }}>B</MenuItem>
            <MenuItem onClick={() => {
              setTitle("Streaming - C")
            }}>C</MenuItem>
          </SubMenu>

          <SubMenu title="Historical">
            <MenuItem>A</MenuItem>
            <MenuItem>B</MenuItem>
            <MenuItem>C</MenuItem>
          </SubMenu>

          <SubMenu title="Manage">
          <MenuItem>A</MenuItem>
          <MenuItem>B</MenuItem>
          <MenuItem>C</MenuItem>
          </SubMenu>

          <SubMenu title="Sensor Fusion">
          <MenuItem>A</MenuItem>
          <MenuItem>B</MenuItem>
          <MenuItem>C</MenuItem>
          </SubMenu>

        </Menu>
      </ProSidebar>
      <div id='content'>{title}</div>
    </div>
  );
};

export default Dashboard;
