import React, {useEffect, useRef, useState} from 'react';
import './mainview.css';
import useWindowSize from '../../hooks/useWindowDimensions';
import {ConfigPanel} from '../config-panel';
import useDrawText from '../../hooks/useDrawText';
import GreenFilter from '../../assets/green-filter.svg';
import {PossibleColors, useColorStore} from '../../hooks/useColorStore';
import {SubMenuItems, useMenuStore} from '../../hooks/useMenuStore';
import {useCanvasStore} from '../../hooks/useCanvasStore';
import useDrawPen from '../../hooks/usePenDraw';

type propsType = {
    url: string;
    mimeTypeFile: string;
    maxHeight?: number;
    maxWidth?: number;
}

export const MainView = (props: propsType) => {
    const { height, width } = useWindowSize()
    const [setText, setTextContext] = useDrawText()

    const [textAreaState, setTextAreaState] = useState({x: 0, y: 0, w: 0, h: 0});
    const [selectedText, setSelectedText] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null!);
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const imageRef = useRef<HTMLImageElement>(null!);
    const filterRef = useRef<HTMLImageElement>(null!);

    const setCanvas = useCanvasStore(state => state.setCanvas);
    const setContext = useCanvasStore(state => state.setContext);

    // const setPenColour = useColorStore(state => state.setPenColor);
    // const setWordColour = useColorStore(state => state.setWordColor);
    // const subMenuSelected = useMenuStore(state => state.subMenu);
    // const closeMenu = useMenuStore(state => state.setHamburgerMenu);

    const addCanvasContext = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
        setCanvas(canvas);
        setContext(context);
    }

    useEffect(() => {
        console.log('re-render of canvas')
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const heightRatio = 1.5;
        canvas.height = canvas.width * heightRatio;
        if (context == null) throw new Error('Could not get context');
        addCanvasContext(canvas, context);

        // if(props.mimeTypeFile == 'video') {
        //     context.clearRect(0, 0, width, height);
        //     listenPlay(context, canvas)
        // }
        if (props.mimeTypeFile == 'image') {
            paintImage(context, canvas);
            // if (context1 == null) throw new Error('Could not get context');
            painLayer(context, canvas);
            // requestAnimationFrame(paintImage.bind(this, context, canvas))
        }

    }, [props, width, height, canvasRef])



    const painLayer = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        // filterRef.current.addEventListener('load', () => {
   //     console.log('painting filte')
        // setTimeout(() => {
            context.drawImage(
                filterRef.current,
                0,
                0,
                canvas.width,
                canvas.height,
            );
        // }, 100)

        // })
    }

    const paintImage = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        imageRef.current.addEventListener('load', () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.drawImage(
                imageRef.current,
                0,
                0,
                canvas.width,
                canvas.height,
            );
            setText('edit me')
            setTextContext(context);
            painLayer(context, canvas)
        });


    }


    const hitDetection = (_ctx: CanvasRenderingContext2D,  canvas: HTMLCanvasElement) => {
        canvas.addEventListener('mousedown', (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
            console.log(textAreaState);
            if (e.clientX > textAreaState.x && (e.clientX < textAreaState.w - textAreaState.x)) {
                if (e.clientY > textAreaState.y && (e.clientY < textAreaState.h + textAreaState.y)) {
                    //x: 0, y: 0, w: 0, h: 0
                    setSelectedText(true);
                    setTextAreaState({x: textAreaState.x, y: 330, w: textAreaState.w, h: textAreaState.h});
                    // alert('here cunt')
                    console.log({x: textAreaState.x, y: 330, w: textAreaState.w, h: textAreaState.h})
                    // console.log(textAreaState);
                    // updateCanvas(ctx, canvas)
                }
            }
        }, false);
    }




    const updateCanvas = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        drawWaterMark(context);
        if (videoRef.current.ended || videoRef.current.paused) {
            return;
        }
        context.drawImage(
            videoRef.current,
            0,
            0,
            canvas.width,
            canvas.height,
        )



     //   requestAnimationFrame(updateCanvas.bind(this, context, canvas));
    }

    const drawWaterMark = (ctx: CanvasRenderingContext2D) => {

        if(ctx) {
            const text = 'spirefans.com/'
            // @ts-ignore
            ctx.font = '48px serif';
            // @ts-ignore
            ctx.fillText(text, 10, 50);
            detectWaterMarkPosition(ctx, text);

        }


    }

    const detectWaterMarkPosition = (ctx: CanvasRenderingContext2D, text: string) => {
        if(ctx) {
            // @ts-ignore
            const textWidth = ctx.measureText(text).width;
            // @ts-ignore
            let metrics = ctx.measureText(text);
            let textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            // console.log(textHeight, textWidth);
            setTextAreaState({x: 10, y: (60 - textHeight), w: textWidth, h: textHeight});
            // console.error('setting state')
            // setTextAreaState({y: 'hey'})
            // setTextArea({x: 10, y: (60 - textHeight), w: textWidth, h: textHeight })

            // @ts-ignore
            ctx.strokeStyle = 'green';
            // @ts-ignore
            ctx.strokeRect(10, (60 - textHeight ), textWidth, textHeight);
        }
    }

    return (
        <>
            <canvas ref={canvasRef} width={width}></canvas>
            <div className="configPanel" >
                <ConfigPanel />
            </div>
            {/*<VideoSlider/>*/}
            <video className="rawTag" ref={videoRef} autoPlay src={props.url}>
            </video>
            <img className="rawTag" ref={imageRef} src={props.url} />
            <img className="rawTag" ref={filterRef} src="https://svguploadtestbucketdevin.s3.ap-southeast-2.amazonaws.com/purple-filter.svg"/>
        </>
    )
}
