import create from 'zustand';

export interface CanvasLayer {
    addLayer: (canvas: any) => void;
    addLayerPreview: (preview: any) => void;
    preview: HTMLImageElement[];
    layer: HTMLCanvasElement[];
}

export const useLayerStore = create<CanvasLayer>((set: any) => ({
    layer: [],
    preview: [],
    addLayer: (canvas: any) => {
        set((state: any) => {
            return {
                ...state.layer,
                layer: [...state.layer, canvas],
            }
        });
    },
    addLayerPreview: (previewImg: any) => {
        set((state: any) => {
            return {
                ...state.preview,
                preview: [...state.preview, previewImg]
            }
        })
    }
}));
