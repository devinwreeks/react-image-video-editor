import create from 'zustand'

export interface Canvas {
    canvas: HTMLCanvasElement | null,
    context: CanvasRenderingContext2D | null,
    setCanvas: (canvas: HTMLCanvasElement) => void;
    setContext: (context: CanvasRenderingContext2D) => void;
}

export const useCanvasStore = create<Canvas>((set) => ({
    canvas: null,
    context: null,
    setCanvas: (canvas) => set(() => ({canvas: canvas})),
    setContext: (context) => set(() => ({context: context}))
}))
