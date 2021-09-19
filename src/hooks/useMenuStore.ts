import create from 'zustand'

export enum SubMenuItems {
    textMenu = "textMenu",
    filterMenu = "filterMenu",
    penMenu = "penMenu",
    hamburger = "hamburger"
}

export interface MenuItems {
    hamburgerMenu: boolean;
    subMenu: SubMenuItems;
    setHamburgerMenu: () => void;
    setSubMenu: (selectedMenu: SubMenuItems) => void;
}

export const useMenuStore = create<MenuItems>((set) => ({
    hamburgerMenu: false,
    subMenu: SubMenuItems.hamburger,
    setHamburgerMenu: () => set((state) => ({hamburgerMenu: !state.hamburgerMenu})),
    setSubMenu: (selectedMenu: SubMenuItems) => set(() => ({subMenu: selectedMenu})),
}))
