import React from "react"
import "./gallery-selector.css"
import GreenFilter from '../../../assets/green-filter.svg';
import PurpleFilter from '../../../assets/purple-filter.svg';
import useDrawFilter from '../../../hooks/useDrawImage';
export const GallerySelector = () => {
    const {addImage} = useDrawFilter();
    return (
        <>
        <div className="galleryContainer">
            <div className="galleryItem">
                <GreenFilter onClick={() => addImage('https://svguploadtestbucketdevin.s3.ap-southeast-2.amazonaws.com/green-filter.svg')} />
            </div>
            <div className="galleryItem">
                <PurpleFilter onClick={() => addImage('https://svguploadtestbucketdevin.s3.ap-southeast-2.amazonaws.com/purple-filter.svg')}/>
            </div>
            <div className="galleryItem">
                <div className="removeFilter">
                    X
                </div>
            </div>
        </div>
        </>
    )
}
