import {useCanvasStore} from './useCanvasStore';
import React from 'react';
import {useLayerStore} from './useLayerStore';
import useAddLayer from './useAddLayer';

const useDrawImage = () => {
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);
    const numberLayer = useLayerStore(state => state.layer);
    const preview = useLayerStore(state => state.preview);
    const addPreview = useLayerStore(state => state.addLayerPreview);
    const {addLayer} = useAddLayer()
    const addImage =
        (imagePath: string) => {
            if (context && canvas) {

                addLayer();

                const image = new Image();
                image.src = `${imagePath}`;
                image.height = canvas.height;
                image.width = canvas.width;
                // image.id = `${numberLayer.length}`
                image.addEventListener('load', function() {
                    drawImage(context, canvas, image)
                    createPreview(canvas);
                } ,false);
                image.removeEventListener('load', function () {
                    drawImage(context, canvas, image)
                }, false)
            }
        }

   const createPreview = (canvas: HTMLCanvasElement) => {
       const preview = React.createElement('img', {
           width: 80,
           height: 65,
           src: canvas.toDataURL()
       });
       addPreview(preview);
    }

    const rotateImage = () => {
        if(context && canvas) {
            console.log(preview);
            context.clearRect(0,0,canvas.width,canvas.height);
            context.save();
            context.translate(canvas.width/2,canvas.height/2);
            context.rotate(90);
            context.drawImage(preview[0],-canvas.width,-canvas.height);
            context.restore();
        }

    }

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

    return {addImage, rotateImage} as const;

};
export default useDrawImage;
