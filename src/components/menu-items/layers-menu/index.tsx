import React, {useCallback} from 'react';
import './layers-menu.css';
import {SubMenuItems, useMenuStore} from '../../../hooks/useMenuStore';
import useDrawPen from '../../../hooks/usePenDraw';
import useDrawImage from '../../../hooks/useDrawImage';



export const LayersMenu = () => {

    const setMenu = useMenuStore(state => state.setHamburgerMenu);
    const expand = useMenuStore(state => state.hamburgerMenu);
    const closeMenu = useMenuStore(state => state.setHamburgerMenu);
    const subMenu = useMenuStore(state => state.setSubMenu);
    const {drawPen} = useDrawPen();
    const {addImage} = useDrawImage();

    const changePicture  = (event: any) => {
        addImage(URL.createObjectURL(event.target.files[0]))
    };

    const addPicture = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'file';
        input.onchange = changePicture
        input.click();
    }

    // const openSubMenu =
    //     (selectedSub: SubMenuItems) => {
    //         subMenu(selectedSub);
    //         if(selectedSub == SubMenuItems.penMenu) {
    //             drawPen()
    //         }
    //         closeMenu();
    //     }
    // //     [],
    // // );
    // const expandMenu = useCallback(
    //     () => {
    //         setMenu;
    //         openSubMenu(SubMenuItems.hamburger);
    //     },
    //     [],
    // );
    //
    //

    return (
        <>
            <div className="configContainer">
                <div className="configButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"/></svg>
                </div>
                <div className={expand ? 'menu-show' : 'menu-hide'}>

                </div>
            </div>
        </>
    )
}
