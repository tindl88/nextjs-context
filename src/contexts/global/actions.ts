import * as types from "./types";

interface IMenuAction {
  type: typeof types.OPEN_MAINMENU;
  payload: {
    isOpenMainMenu: boolean;
  };
}

interface IModalVideoAction {
  type: typeof types.OPEN_VIDEO_MODAL;
  payload: {
    isOpenVideoModal: boolean;
  };
}

export const setMenuOpen = (isOpenMainMenu: boolean): IMenuAction => {
  return { type: types.OPEN_MAINMENU, payload: { isOpenMainMenu } };
};

export const setModalVideoOpen = (isOpenVideoModal: boolean): IModalVideoAction => {
  return { type: types.OPEN_VIDEO_MODAL, payload: { isOpenVideoModal } };
};

export type IAction = IMenuAction | IModalVideoAction;
