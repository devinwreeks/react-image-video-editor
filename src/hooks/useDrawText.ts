import {useEffect, useState} from 'react';
import useWindowSize from './useWindowDimensions';

const useDrawText = () => {
    const {width, height} = useWindowSize();
    const [text, setText] = useState('')
    const [textContext, setTextContext] = useState<CanvasRenderingContext2D | null>(null);
    if(textContext) {
        textContext.font = '48px serif';
        textContext.fillText(text, (width/2) - 50, (height/2) - 50);
    }
    return [setText, setTextContext] as const;

}
export default useDrawText;
