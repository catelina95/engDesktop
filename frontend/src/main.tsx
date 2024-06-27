import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import router from "./router";
import { ConfigProvider } from "antd";
import useGlobalStore from "./store/globalStore";
import { darkTheme, lightTheme } from "./theme";

const Index = () => {
  const { curTheme } = useGlobalStore();

  const setCssVariables = (variables: Record<string, string>) => {
    Object.keys(variables).forEach((variable) => {
      document.documentElement.style.setProperty(variable, variables[variable]);
    });
  };

  const customTheme = useMemo(() => {
    console.log("curTheme: ", curTheme);
    return curTheme === "light" ? lightTheme : darkTheme;
  }, [curTheme]);

  useEffect(() => {
    console.log("useEffect: ", curTheme);
    setCssVariables(
      curTheme === "light" ? lightTheme.cssVariables : darkTheme.cssVariables,
    );
  }, [curTheme]);

  return (
    <ConfigProvider theme={customTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Index />);
