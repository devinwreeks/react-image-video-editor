import React, {useCallback} from 'react';
import './colorSelector.css';
import {PossibleColors, useColorStore} from '../../../hooks/useColorStore';
import {SubMenuItems, useMenuStore} from '../../../hooks/useMenuStore';

export const ColorSelector = () => {
    const setPenColour = useColorStore(state => state.setPenColor);
    const setWordColour = useColorStore(state => state.setWordColor);
    const subMenuSelected = useMenuStore(state => state.subMenu);



    const addColor = useCallback(
        (color: PossibleColors, e: any) => {
            e.stopPropagation();
            if(subMenuSelected === SubMenuItems.penMenu) {
                console.log(subMenuSelected)
                setPenColour(color);
            } else {
                setWordColour(color);
            }
        },
        [],
    );


    return (
        <>
            <div className="colorSelectContainer">
            <div className="colorSelect colorBlack" onClick={(event) => addColor(PossibleColors.black, event)}>
            </div>
            <div className="colorSelect colorWhite" onClick={(event) => addColor(PossibleColors.white, event)}>
            </div>
            <div className="colorSelect colorRed" onClick={(event) => addColor(PossibleColors.red, event)}>
            </div>
            <div className="colorSelect colorYellow" onClick={(event) => addColor(PossibleColors.yellow, event)}>
            </div>
            <div className="colorSelect colorGreen" onClick={(event) => addColor(PossibleColors.green, event)}>
            </div>
            <div className="colorSelect colorBlue" onClick={(event) => addColor(PossibleColors.blue, event)}>
            </div>
            </div>
        </>
    )
}
