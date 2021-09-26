import {useCallback} from 'react';
import {useCanvasStore} from './useCanvasStore';

const useDrawImage = () => {
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);


    const addImage = useCallback(
        (imagePath: string) => {
            if (context && canvas) {
                const image = new Image();
                image.src = imagePath;
                image.height = canvas.height;
                image.width = canvas.width;
                console.log(image);
                image.addEventListener('load', function() {
                    drawImage(context, canvas, image)
                } ,false);
                image.removeEventListener('load', function () {
                    drawImage(context, canvas, image)
                }, false)
            }
        },
        [],
    );

    const drawImage = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, image: HTMLImageElement) => {
        {
            context.drawImage(
                image,
                0,
                0,
                canvas.width,
                canvas.height,
            );
        }
    }

    return {addImage} as const;

};
export default useDrawImage;
