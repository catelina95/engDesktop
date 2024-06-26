import { ConfigProvider, theme, Button, Layout } from "antd";
import React, { useEffect, useMemo } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import SiderBar from "./SiderBar";
const { Content } = Layout;
import globalStore from "@/store/globalStore";
import { useUserStore } from "@/store/userStore";

const CmLayout: React.FC = () => {
  const { curTheme, toggleTheme, collapsed, toggleCollapsed } = globalStore();
  const { user, getUserInfo } = useUserStore();

  const customTheme = useMemo(() => {
    return {
      algorithm:
        curTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
    };
  }, [curTheme]);

  const iconStyle = useMemo(
    () => ({
      color: curTheme === "dark" ? "#08c" : "#fadb14",
      fontSize: "18px",
    }),
    [curTheme],
  );

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ConfigProvider theme={customTheme}>
      <Layout style={{ height: "100vh" }}>
        <SiderBar collapsed={collapsed} />
        <Layout>
          <div className="flex justify-between h-60  items-center px-16">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
            />

            <div className="cursor-pointer" onClick={toggleTheme}>
              <span>{user?.username}</span>
              {curTheme === "dark" ? (
                <MoonFilled style={iconStyle} />
              ) : (
                <SunFilled style={iconStyle} />
              )}
            </div>
          </div>
          <Content style={{ padding: "24px" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default CmLayout;
