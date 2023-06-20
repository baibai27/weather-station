import { createContext } from "react";

import { useImmer } from "use-immer";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, setState] = useImmer({
    search: "",
    selectedCity: {},
    unitTemp: "C",
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
