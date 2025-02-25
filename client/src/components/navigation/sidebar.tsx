// Copyright Schulich Racing FSAE
// Written by Ryan Painchaud, Justin Tijunelis

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { bindActionCreators } from "redux";
import {
  useAppSelector,
  useAppDispatch,
  RootState,
  dashboardPageSelected,
} from "state";
import {
  History,
  DataObject,
  StackedLineChart,
  Settings,
} from "@mui/icons-material";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { useWindowSize } from "hooks/index";
import "react-pro-sidebar/dist/css/styles.css";
import "./_styling/sidebar.css";

const structure = [
  {
    name: "Streaming",
    image: <StackedLineChart />,
    children: ["Real-Time Charts", "Raw Data"],
  },
  {
    name: "Historical",
    image: <History />,
    children: ["Data", "Plots"],
  },
  {
    // TODO: Only show this if the user is a lead or admin
    name: "Manage",
    image: <DataObject />,
    children: ["Organization", "Things", "Sensors", "Operators"],
  },
];

interface SidebarProps {
  toggled: boolean;
  onCollapse?: (v: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const dashboard = useAppSelector((state: RootState) => state.dashboard);
  const selected = bindActionCreators(dashboardPageSelected, useAppDispatch());
  const size = useWindowSize();

  return (
    <ProSidebar
      collapsed={!((collapsed && !props.toggled) || size.width <= 768.9)}
      toggled={props.toggled}
      breakPoint="md"
      width={220}
    >
      {size.width >= 768.9 && (
        <SidebarHeader>
          <div>
            <Hamburger
              onToggle={() => {
                if (props.onCollapse) props.onCollapse(!collapsed);
                setCollapsed(!collapsed);
              }}
              size={24}
            />
          </div>
        </SidebarHeader>
      )}
      <SidebarContent>
        <Menu popperArrow={true}>
          {structure.map((sub) => {
            return (
              <SubMenu
                key={sub.name}
                title={sub.name}
                icon={sub.image}
                defaultOpen={sub.children.includes(dashboard.page)}
              >
                {sub.children.map((name) => {
                  return (
                    <>
                      <MenuItem
                        key={name}
                        onClick={() =>
                          selected({ page: name, section: sub.name })
                        }
                        active={name === dashboard.page}
                      >
                        {name}
                      </MenuItem>
                    </>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu>
          <SubMenu key="Settings" title="Settings" icon={<Settings />} />
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
