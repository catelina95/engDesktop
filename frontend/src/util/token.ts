const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

const getToken = () => {
    return localStorage.getItem("token");
};

const removeToken = () => {
    localStorage.removeItem("token");
};

export { setToken, getToken, removeToken };