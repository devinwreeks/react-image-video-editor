import * as React from 'react';
import {UploadButton} from './components/upload-button';
import {useRef, useState} from 'react';
import {MainView} from './components/main-view';
import './App.css';

type propsType = {
    height?: number;
    width?: number;
}

export const MediaEditor = () => {
    const inputFileRef = useRef<HTMLInputElement>(null!);
    const [selectedFile, setSelectedFile] = useState('');
    const [mimeTypeFile, setMimeTypeFile] = useState(null!);
    const changeHandler = (event: any) => {
        console.log('on change activated')
        setMimeTypeFile(event.target.files[0].type.split('/')[0])
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };
    const handleAddVideo = () => {
        inputFileRef.current.click()
    };
  return (
      <>
      <MainView url={selectedFile} mimeTypeFile={mimeTypeFile}/>
      <input type="file" name="file" ref={inputFileRef}  onChange={changeHandler} hidden />
      <div className="center-upload">
          <UploadButton uploadButton={handleAddVideo}/>
      </div>
      </>
  )
}
