import React from "react";
import { Layout } from "antd";
import globalStore from "@/store/globalStore";
const { Sider } = Layout;

interface SiderBarProps {
  collapsed: boolean;
}

const SiderBar: React.FC<SiderBarProps> = ({ collapsed }) => {
  const { curTheme } = globalStore();
  return (
    <Sider
      theme={curTheme}
      width={200}
      collapsedWidth={0}
      collapsed={collapsed}
      collapsible
      trigger={null}
    ></Sider>
  );
};

export default SiderBar;
