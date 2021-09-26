import {useColorStore} from './useColorStore';
import {useCanvasStore} from './useCanvasStore';
import {useState} from 'react';

const useDrawPen = () => {
    const canvas = useCanvasStore(state => state.canvas);
    const context = useCanvasStore(state => state.context);
    const penColor = useColorStore(state => state.penColor);
    const [flag, setFlag] = useState(false);
    const [prevX, setPrevX] = useState(0);
    const [currX, setCurrX] = useState(0);
    const [prevY, setPrevY] = useState(0);
    const [currY, setCurrY] = useState(0);
    const [dotFlag, setDotFlag] = useState(false);

    // const draw = (e: MouseEvent) => {
        if (canvas && context) {
            const drawLine = () => {
                context.beginPath();
                context.moveTo(prevX, prevY);
                context.lineTo(currX, currY);
                context.strokeStyle = penColor;
                context.lineWidth = 10;
                context.stroke();
                context.closePath();
            }

            const findXy = (res: string, e: any) => {
                if (res == 'down') {
                    setPrevX(currX);
                    setPrevY(currY);
                    setCurrX(e.clientX - canvas.offsetLeft);
                    setCurrY(e.clientY - canvas.offsetTop)
                    setFlag(true);
                    setDotFlag(true)
                    if (dotFlag) {
                        context.beginPath();
                        context.fillStyle = penColor;
                        context.fillRect(currX, currY, 2, 2);
                        context.closePath();
                        setDotFlag(false);
                    }
                }
                if (res == 'up' || res == "out") {
                    setFlag(false);
                }
                if (res == 'move') {
                    if (flag) {
                        setPrevX(currX);
                        setPrevY(currY);
                        setCurrX(e.clientX - canvas.offsetLeft);
                        setCurrY(e.clientY - canvas.offsetTop);
                        drawLine();
                    }
                }
            }


            // context.fillStyle = penColor
            // context.fillRect((e.clientX - 10), (e.clientY - 10), 20, 20);
            canvas.addEventListener("mousemove", function (e) {
                findXy('move', e)
            }, false);
            canvas.addEventListener("mousedown", function (e) {
                findXy('down', e)
            }, false);
            canvas.addEventListener("mouseup",  function(e) {
                findXy('up', e)
            }, false);
            canvas.addEventListener("mouseout", function(e) {
                findXy('out', e)
            }, false);
        }
        // if (canvas && context) {
        //     canvas.addEventListener('mousedown', draw);
        // }

        return
    // }
}
export default useDrawPen;
