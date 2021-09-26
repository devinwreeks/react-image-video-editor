import {useState} from 'react';
import {useCanvasStore} from './useCanvasStore';
import {useColorStore} from './useColorStore';

const useDrawText = () => {
    const [text, setText] = useState('')
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);
    const wordColor = useColorStore(state => state.wordColor);
    if(context && canvas) {
        context.font = '48px serif';
        context.fillStyle = wordColor;
        context.fillText(text, (canvas.width / 2 ) - 50, (canvas.height / 2) - 50);
    }
    return [setText] as const;

}
export default useDrawText;
