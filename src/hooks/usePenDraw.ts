import {useColorStore} from './useColorStore';
import {useCanvasStore} from './useCanvasStore';
import React from 'react';
import {useLayerStore} from './useLayerStore';
const useDrawPen = () => {
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);
    const penColor = useColorStore(state => state.penColor);
    const addPreview = useLayerStore(state => state.addLayerPreview);
    let x = 0, y = 0;
    let isMouseDown = false;
    const stopDrawing = () => { isMouseDown = false; }

    console.log(penColor);
    const startDrawing = (event: any) => {
        event.preventDefault();
        isMouseDown = true;
        [x, y] = [event.touches[0].pageX, event.touches[0].pageY];
    }
    const drawLine = (event: any, pennedColor: any) => {
        event.preventDefault();
        if ( isMouseDown ) {
            const newX = event.touches[0].pageX
            const newY = event.touches[0].pageY
            if (context){

                context.strokeStyle = pennedColor
                context.lineWidth = 20;
                context.beginPath();
                context.moveTo( x, y );
                context.lineTo( newX, newY );
                context.stroke();
                //[x, y] = [newX, newY];
                x = newX;
                y = newY;
            }

        }
    }

    const removePen = () => {
        if(canvas) {
            canvas.removeEventListener( 'touchstart', startDrawing, true );
            canvas.removeEventListener( 'touchmove', function (e) {
                drawLine(e, penColor);
            }, false);
            canvas.removeEventListener( 'touchend', stopDrawing, true);
        }
    }

    const createPreview = () => {
        if(canvas){
            const preview = React.createElement('img', {
                width: 80,
                height: 65,
                src: canvas.toDataURL()
            });
            addPreview(preview);
        }

    }

    const drawPen = (col: any) => {
        if (canvas && context) {
            canvas.addEventListener( 'touchstart', startDrawing, false );
            canvas.addEventListener( 'touchmove', function (e) {
                drawLine(e, col);
            }, false);
            canvas.addEventListener( 'touchend', stopDrawing, false );
        }
    }
        return {drawPen, removePen, createPreview} as const;
}
export default useDrawPen;
