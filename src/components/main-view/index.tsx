import React, {useCallback, useEffect, useRef, useState} from 'react';
import './mainview.css';
import useWindowSize from '../../hooks/useWindowDimensions';
import {ConfigPanel} from '../config-panel';
import useDrawText from '../../hooks/useDrawText';
import {useCanvasStore} from '../../hooks/useCanvasStore';
import {LayersMenu} from '../menu-items/layers-menu';
import {useLayerStore} from '../../hooks/useLayerStore';

type propsType = {
    maxHeight?: number;
    maxWidth?: number;
}

export const MainView = (props: propsType) => {
    console.log(props);
    const { height, width } = useWindowSize()
    const [setText] = useDrawText()
    const [textAreaState, setTextAreaState] = useState({x: 0, y: 0, w: 0, h: 0});


    const setCanvas = useCanvasStore(state => state.setCanvas);
    const setContext = useCanvasStore(state => state.setContext);
    const layers = useLayerStore(state => state.layer);


    const hitDetection = (_ctx: CanvasRenderingContext2D,  canvas: HTMLCanvasElement) => {
        canvas.addEventListener('mousedown', (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
            console.log(textAreaState);
            if (e.clientX > textAreaState.x && (e.clientX < textAreaState.w - textAreaState.x)) {
                if (e.clientY > textAreaState.y && (e.clientY < textAreaState.h + textAreaState.y)) {
                    //x: 0, y: 0, w: 0, h: 0
                    setTextAreaState({x: textAreaState.x, y: 330, w: textAreaState.w, h: textAreaState.h});
                    // alert('here cunt')
                    console.log({x: textAreaState.x, y: 330, w: textAreaState.w, h: textAreaState.h})
                    // console.log(textAreaState);
                    // updateCanvas(ctx, canvas)
                }
            }
        }, false);
    }



    const detectWaterMarkPosition = (ctx: CanvasRenderingContext2D, text: string) => {
        if(ctx) {
            // @ts-ignore
            const textWidth = ctx.measureText(text).width;
            // @ts-ignore
            let metrics = ctx.measureText(text);
            let textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            // console.log(textHeight, textWidth);
            setTextAreaState({x: 10, y: (60 - textHeight), w: textWidth, h: textHeight});
            // console.error('setting state')
            // setTextAreaState({y: 'hey'})
            // setTextArea({x: 10, y: (60 - textHeight), w: textWidth, h: textHeight })

            // @ts-ignore
            ctx.strokeStyle = 'green';
            // @ts-ignore
            ctx.strokeRect(10, (60 - textHeight ), textWidth, textHeight);
        }
    }

    const canvasLayers = layers.map((layerElement: HTMLCanvasElement) => layerElement)

    return (
        <>
            {layers.length === 0 ? <div style={{height: width * 1.5, width: width}}></div> : ''}
            <div className="canvasLayers">{canvasLayers}</div>
            <div className="configPanel" >
                <ConfigPanel />
            </div>
        </>
    )
}
