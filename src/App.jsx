import React, { useContext } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import AppBody from "./components/AppBody";

function App() {
  const [state] = useContext(AppContext);
  return (
    <div
      className={
        state?.selectedCity?.main?.temp > Number(12 + 273.15)
          ? "app warm"
          : "app"
      }
    >
      <main>
        <Header />
        <AppBody />
      </main>
    </div>
  );
}

export default App;
