import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
// createContext의 파라미터에는 기본값을 설정할 수 있음.

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//context 안에 provider라는 컴포넌트가 들어있음. 이 컴포넌트를 통해 context값을 설정할 수 있음. 이 컴포넌트를 사용할때에는 value 값을 설정해주면 됨.

export const useStateProvider = () => useContext(StateContext);
