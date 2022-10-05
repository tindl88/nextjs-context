import { FC, ReactNode, useReducer } from "react";

import { Context, DispatchContext } from "./context";
import reducer from "./reducer";
import initialState from "./state";

interface IProps {
  children: ReactNode;
}

const Provider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state }}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </Context.Provider>
  );
};

export default Provider;
