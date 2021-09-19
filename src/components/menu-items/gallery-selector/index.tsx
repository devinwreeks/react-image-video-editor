import React from "react"
import "./gallery-selector.css"
import GreenFilter from '../../../assets/green-filter.svg';
import PurpleFilter from '../../../assets/purple-filter.svg';
export const GallerySelector = () => {
    return (
        <>
        <div className="galleryContainer">
            <div className="galleryItem">
            <GreenFilter/>
            </div>
            <div className="galleryItem">
                <PurpleFilter/>
            </div>
        </div>
        </>
    )
}
