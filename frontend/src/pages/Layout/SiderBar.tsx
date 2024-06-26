import React from "react";
import { Layout } from "antd";
import useGlobalStore from "../../store/useGlobalStore";
const { Sider } = Layout;

type SiderBarProps = {
  collapsed: boolean;
};

const SiderBar: React.FC<SiderBarProps> = ({ collapsed }) => {
  const { curTheme } = useGlobalStore();
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
