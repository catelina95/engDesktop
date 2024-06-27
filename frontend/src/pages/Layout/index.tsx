import { ConfigProvider, Button, Layout } from "antd";
import React, { useEffect, useMemo } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import SiderBar from "./SiderBar";
import useGlobalStore from "@/store/globalStore";
import { useUserStore } from "@/store/userStore";

const { Content } = Layout;

const CmLayout: React.FC = () => {
  const { curTheme, toggleTheme, collapsed, toggleCollapsed } =
    useGlobalStore();
  const { user, getUserInfo } = useUserStore();

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <SiderBar collapsed={collapsed} />
      <Layout>
        <div className="flex justify-between h-60 items-center px-16">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
          />
          <div
            className="cursor-pointer flex items-center"
            onClick={toggleTheme}
          >
            <span>{user?.username}</span>
            {curTheme === "dark" ? (
              <MoonFilled style={{ color: "#08c" }} />
            ) : (
              <SunFilled style={{ color: "#fadb14" }} />
            )}
          </div>
        </div>
        <Content style={{ padding: "24px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CmLayout;
