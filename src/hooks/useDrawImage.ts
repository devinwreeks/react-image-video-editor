import {useEffect, useState} from 'react';
import useWindowSize from './useWindowDimensions';

const useDrawImage = () => {
    // change to draw image
    const {width, height} = useWindowSize();
    const [image, setImage] = useState('')
    const [imageContext, setImageContext] = useState<CanvasRenderingContext2D | null>(null);
    const [imageRef, setImageRef] = useState<HTMLImageElement>(null!);
    // const [imageCanvas, setImageCanvas]
    if(imageContext) {
        imageContext.drawImage(
            imageRef,
            0,
            0,
            // canvas.width,
            // canvas.height,
        );
    }
    return [setImage, setImageContext, setImageRef] as const;

}
export default useDrawImage;
