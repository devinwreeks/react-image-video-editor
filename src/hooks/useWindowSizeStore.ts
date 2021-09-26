import create from 'zustand'

export interface winSize {
    height?: number | null;
    width?: number | null;
    ratio?: number | null;
}

export interface WinSize {
    winSize: winSize
    setWin: (size: winSize) => void;
}

export const useWinStore = create<WinSize>((set) => ({
    winSize: {height: null, width: null, ratio: null},
    setWin: (winSize) => set(() => ({winSize: winSize})),
}));
