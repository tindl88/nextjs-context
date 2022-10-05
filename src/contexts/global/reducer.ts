import { IAction } from "./actions";
import { IState } from "./state";
import * as types from "./types";

export default function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (type) {
    case types.OPEN_MAINMENU:
      return { ...state, isOpenMainMenu: payload.isOpenMainMenu };
    case types.OPEN_VIDEO_MODAL:
      return { ...state, isOpenVideoModal: payload.isOpenVideoModal };
    default:
      return state;
  }
}
