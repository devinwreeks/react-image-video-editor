import * as React from 'react';
import {UploadButton} from './components/upload-button';
import {useEffect, useRef} from 'react';
import {MainView} from './components/main-view';
import './App.css';
import useDrawImage from './hooks/useDrawImage';
import {useWinStore, winSize} from './hooks/useWindowSizeStore';
import useWindowSize from './hooks/useWindowDimensions';
import useAddLayer from './hooks/useAddLayer';



// can pass height, width, and ratio (all optional, otherwise the default is width and height 1.5 * width)
export const MediaEditor = (props?: winSize) => {
    console.log(props)
    const inputFileRef = useRef<HTMLInputElement>(null!);
    const { height, width } = useWindowSize()
    const {addImage} = useDrawImage();
    const {addLayer} = useAddLayer();
    const setWinSize = useWinStore(state => state.setWin);
    console.log(props)
    useEffect(() => {
        /// could probably move this somewhere
        if(props?.height && props?.width) {
            setWinSize(props);
        } else {
            const ratio =  1.5;
            const h = width * ratio;
            setWinSize({height: h, width: width});
        }

    }, [props, height, width]);



    const changeHandler = (event: any) => {
        addImage(URL.createObjectURL(event.target.files[0]))
    };
    const handleAddVideo = () => {
        inputFileRef.current.click()
        addLayer();
    };

  return (
      <>
      <MainView />
      <input type="file" name="file" ref={inputFileRef}  onChange={changeHandler} hidden />
      <div className="center-upload">
          <UploadButton uploadButton={handleAddVideo}/>
      </div>
      </>
  )
}
