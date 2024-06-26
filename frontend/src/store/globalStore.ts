import { create } from 'zustand';

interface GlobalState {
    curTheme: 'light' | 'dark';
    toggleTheme: () => void;
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const globalStore = create<GlobalState>((set) => ({
    curTheme: 'dark',
    toggleTheme: () => set((state) => ({ curTheme: state.curTheme === 'light' ? 'dark' : 'light' })),
    collapsed: false,
    toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export default globalStore;
