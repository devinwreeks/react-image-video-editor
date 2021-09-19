import {useEffect, useState} from 'react';
import useWindowSize from './useWindowDimensions';
import {PossibleColors, useColorStore} from './useColorStore';
import {SubMenuItems, useMenuStore} from './useMenuStore';
import {useCanvasStore} from './useCanvasStore';

const useDrawPen = () => {
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);
    // const setListener = useCanvasStore(state => state.canvasListener);
    const penColor = useColorStore(state => state.penColor);

    const draw = (e: MouseEvent) => {
        if (canvas && context) {
            context.fillStyle = penColor
            context.fillRect((e.clientX - 10), (e.clientY - 10), 20, 20);
        }
    }
    console.log(penColor)
        if (canvas && context) {
            canvas.addEventListener('mousedown', draw);
    }




    //
    // // // change to draw image
    // // const {width, height} = useWindowSize();
    // // const [image, setImage] = useState('')
    // // const [imageContext, setImageContext] = useState<CanvasRenderingContext2D | null>(null);
    // // const [imageRef, setImageRef] = useState<HTMLImageElement>(null!);
    // // // const [imageCanvas, setImageCanvas]
    // // if(imageContext) {
    // //     imageContext.drawImage(
    // //         imageRef,
    // //         0,
    // //         0,
    // //         // canvas.width,
    // //         // canvas.height,
    // //     );
    // // }
    // return [canvas] as const;
     return
}
export default useDrawPen;
