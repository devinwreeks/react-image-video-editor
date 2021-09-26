import {useLayerStore} from './useLayerStore';
import React, {useRef} from 'react';
import {useWinStore} from './useWindowSizeStore';
import {useCanvasStore} from './useCanvasStore';

const useAddLayer = () => {
    const numberLayers = useLayerStore(state => state.layer);
    const addLayerArray = useLayerStore(state => state.addLayer);
    const winSize = useWinStore(state => state.winSize);
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const setCanvas = useCanvasStore(state => state.setCanvas);
    const setContext = useCanvasStore(state => state.setContext);
    const addPreview = useLayerStore(state => state.addLayerPreview);

    const addCanvasContext = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
        setCanvas(canvas);
        setContext(context);
    }

    const addLayer = () => {
        const layer = React.createElement('canvas', {
            className: `canvasLayer`,
            width: winSize.width,
            height: winSize.height,
            ref: canvasRef
        });
        addLayerArray(layer);
        // dirty hack :(
        setTimeout(() => {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            if (context == null) throw new Error('Could not get context');
            addCanvasContext(canvas, context);
        }, 0)

    };

    const createPreview = () => {
        const canvas = canvasRef.current
        if(canvas){
            const preview = React.createElement('img', {
                width: 80,
                height: 65,
                src: canvas.toDataURL()
            });
            addPreview(preview);
        }

    }

    return {addLayer, createPreview} as const;
};
export default useAddLayer;
