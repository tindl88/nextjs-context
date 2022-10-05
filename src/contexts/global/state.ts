export interface IState {
  isOpenMainMenu: boolean;
  isOpenVideoModal: boolean;
}

const initialState: IState = {
  isOpenMainMenu: false,
  isOpenVideoModal: false,
};

export default initialState;
