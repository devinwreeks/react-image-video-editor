import React from "react"
import './uploadButton.css'
type PropType = {
    uploadButton: () => void
}

export const UploadButton = (props: PropType) => {
    return (
        <>
        <button className="uploadButton" onClick={props.uploadButton}>
            Upload
        </button>
        </>
    )
}
