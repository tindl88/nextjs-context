import { useGlobalState, GlobalActions, useGlobalDispatch } from "../contexts/global";

export default function Home() {
  const globalDispatch = useGlobalDispatch();
  const globalState = useGlobalState();

  const toggleMainMenu = () => {
    globalDispatch(GlobalActions.setMenuOpen(!globalState.isOpenMainMenu));
    // globalDispatch({ type: "global/OPEN_MAINMENU", payload: { isOpenMainMenu: !globalState.isOpenMainMenu } });
  };

  const toggleVideoModal = () => {
    globalDispatch(GlobalActions.setModalVideoOpen(!globalState.isOpenVideoModal));
    // globalDispatch({ type: "global/OPEN_VIDEO_MODAL", payload: { isOpenVideoModal: !globalState.isOpenVideoModal } });
  };

  return (
    <>
      <h1>isOpenMainMenu: {globalState.isOpenMainMenu.toString()}</h1>
      <h1>isOpenVideoModal: {globalState.isOpenVideoModal.toString()}</h1>
      <button onClick={() => toggleMainMenu()}>Toggle Main Menu</button>
      <button onClick={() => toggleVideoModal()}>Toggle Video Modal</button>
    </>
  );
}
