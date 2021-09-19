import create from 'zustand'

export enum PossibleColors {
    black = "#282525",
    white = "#eadfdf",
    red = "#ea2649",
    yellow = "#f1e114",
    green = "#4CAF50",
    blue = "#2a62f3",
}

export interface Colours {
    penColor: PossibleColors;
    setPenColor: (colour: PossibleColors) => void;
    wordColor: PossibleColors;
    setWordColor: (colour: PossibleColors) => void;
}

export const useColorStore = create<Colours>((set) => ({
    penColor: PossibleColors.red,
    wordColor: PossibleColors.white,
    setWordColor: (colour: PossibleColors) => set(() => ({ wordColor: colour})),
    setPenColor: (colour: PossibleColors) => set(() => ({ penColor: colour })),
}))
