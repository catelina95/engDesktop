import { theme } from "antd";

export const lightTheme = {
  token: {
    colorPrimary: "#1890ff",
    colorBgBase: "#ffffff",
    colorText: "#000000",
  },
  algorithm: theme.defaultAlgorithm,
  components: {
    Layout: {
      lightSiderBg: "#fff",
      lightTriggerBg: "#fff",
    },
  },
  cssVariables: {
    "--color-bg-base": "#ffffff",
    "--color-text": "#000000",
  },
};

export const darkTheme = {
  token: {
    colorPrimary: "#1890ff",
    colorBgBase: "#141414",
    colorText: "#ffffff",
  },
  algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      siderBg: "rgba(0, 0, 0, 0.5)",
      triggerBg: "rgba(0, 0, 0, 0.5)",
    },
  },
  cssVariables: {
    "--color-bg-base": "#141414",
    "--color-text": "#ffffff",
  },
};
