import { useContext } from "react";
import { Context, DispatchContext } from "./context";

export const useGlobalState = () => useContext(Context);
export const useGlobalDispatch = () => useContext(DispatchContext);
