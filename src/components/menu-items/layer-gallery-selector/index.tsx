import React, {useCallback, useEffect, useRef} from 'react';
import "./layer-gallery-selector.css"
import useAddLayer from '../../../hooks/useAddLayer';
import {useLayerStore} from '../../../hooks/useLayerStore';
import  Dragula from 'react-dragula';

export const LayerGallerySelector = () => {
    const {addLayer} = useAddLayer()
    const preview = useLayerStore((state) => state.preview);


    const selectImg = preview.slice().reverse().map((layerElement: HTMLImageElement) =>   {
        return <div className="selectCanvasItem">{layerElement}</div>
    })

   const dragulaDecorator = (componentBackingInstance: any) => {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    };


    return (
        <>
            <div className="galleryContainer" >
                <div className="layergalleryItem" onClick={() => addLayer()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </div>
                <div ref={dragulaDecorator}>
                    {selectImg}
                </div>
            </div>
        </>
    )
}
