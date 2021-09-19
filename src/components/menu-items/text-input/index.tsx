import React from 'react';
import './textInput.css';
import {ColorSelector} from '../color-selector';
import {SubMenuItems, useMenuStore} from '../../../hooks/useMenuStore';
import {useColorStore} from '../../../hooks/useColorStore';

export const TextInputMenu = () => {
    const expanded = useMenuStore(state => state.subMenu);
    const wordColor = useColorStore(state => state.wordColor);
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={wordColor}><path d="M0 0h24v24H0z" fill="none"/><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></svg>
                <div className={expanded === SubMenuItems.textMenu ? 'showTextInput' : 'hideTextInput'}>
                    <ColorSelector />
                </div>
            </div>

        </>
    )
}
