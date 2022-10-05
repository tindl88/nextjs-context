import { createContext, Dispatch } from "react";
import { IAction } from "./actions";

import initialState, { IState } from "./state";

export const Context = createContext<IState>(initialState);
export const DispatchContext = createContext<Dispatch<IAction>>(() => null);
