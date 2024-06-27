import { create } from 'zustand';

interface GlobalState {
    curTheme: 'light' | 'dark';
    toggleTheme: () => void;
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
    curTheme: 'light',
    toggleTheme: () => set((state) => ({ curTheme: state.curTheme === 'light' ? 'dark' : 'light' })),
    collapsed: false,
    toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export default useGlobalStore;
