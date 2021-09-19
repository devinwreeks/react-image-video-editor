import React, {useCallback} from 'react';
import './config-panel.css';
import {TextInputMenu} from '../menu-items/text-input';
import {PenInput} from '../menu-items/pen-input';
import {FilterMenu} from '../menu-items/filters';
import {SubMenuItems, useMenuStore} from '../../hooks/useMenuStore';
import useDrawPen from '../../hooks/usePenDraw';


export const ConfigPanel = () => {

    const setMenu = useMenuStore(state => state.setHamburgerMenu);
    const expand = useMenuStore(state => state.hamburgerMenu);
    const closeMenu = useMenuStore(state => state.setHamburgerMenu);
    const subMenu = useMenuStore(state => state.setSubMenu);
    const subMenuSelected = useMenuStore(state => state.subMenu);
    const drawPenTool = useDrawPen();

    if(subMenuSelected == SubMenuItems.penMenu) {
       let pen = drawPenTool;
    }



    const openSubMenu = useCallback(
        (selectedSub: SubMenuItems) => {
                subMenu(selectedSub);
                closeMenu();
                },
        [],
    );
    const expandMenu = useCallback(
        () => {
            setMenu;
            openSubMenu(SubMenuItems.hamburger);
        },
        [],
    );


    const SELECTED_ITEM = {
        textMenu: <TextInputMenu/>,
        penMenu: <PenInput />,
        filterMenu: <FilterMenu />,
        hamburger: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    }

    console.log(expand)

    return (
        <>
        <div className="configContainer">
            <div className="configButton" onClick={expandMenu}>
                {
                  SELECTED_ITEM[subMenuSelected]
                }
            </div>
            <div className={expand ? 'menu-show' : 'menu-hide'}>
                <div className="configButton" onClick={() => openSubMenu(SubMenuItems.textMenu)}>
                    <TextInputMenu />
                </div>
                <div className="configButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
                </div>
                <div className="configButton" onClick={() => openSubMenu(SubMenuItems.filterMenu)}>
                    <FilterMenu />
                </div>
                <div className="configButton" onClick={() => openSubMenu(SubMenuItems.penMenu)}>
                    <PenInput />
                </div>
                <div className="configButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></svg>
                </div>
                <div className="configButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></svg>
                </div>
            </div>


        </div>
        </>
    )
}
