import { http_getUserInfo, http_login } from '@/apis/userApi';
import { getToken, removeToken, setToken } from '@/util';
import { create } from 'zustand';

interface User {
    id: number;
    username: string;
}

interface UserStore {
    user: User | null;
    token: string;
    // 方法：获取用户信息
    getUserInfo: () => Promise<void>;
    // 方法：登录用户
    login: (userInfo: { mobile: string, code: string }) => Promise<void>;
    // 方法：退出登录
    logout: () => void;
}

// 创建状态存储
export const useUserStore = create<UserStore>(set => ({
    user: null,
    token: getToken() || '',

    getUserInfo: async () => {
        const res = await http_getUserInfo();
        const { data, message } = res.data;
        if (message === 'ok') {
            set({ user: data });
        } else {
            throw new Error(message);
        }
    },

    login: async (userInfo) => {
        const res = await http_login(userInfo);
        const { data, message } = res.data;
        if (message === 'ok') {
            set({ token: data.token })
            setToken(data.token);
        } else {
            throw new Error(message);
        }
    },

    logout: () => {
        removeToken();
        set({ user: null, token: '' });
    },
}))