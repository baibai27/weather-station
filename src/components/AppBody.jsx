import React, { useContext } from "react";
import dateBuilder from "../common/createDate";
import { AppContext } from "../context/AppContext";
import tempretureConversion from "./tempConversion";

const AppBody = () => {
  const [state, setState] = useContext(AppContext);
  // console.log(state);

  const handleClick = async () => {
    setState((draft) => {
      if (draft.unitTemp === "C") {
        draft.unitTemp = "F";
        return;
      }
      draft.unitTemp = "C";
    });
  };

  if (!state.selectedCity?.status) {
    return <h1 className="text-explain">Please enter the city name</h1>;
  }

  const temperature = tempretureConversion(
    state?.selectedCity,
    state?.unitTemp
  );

  return (
    <div className="search-box">
      <div className="location-box">
        <div className="location">
          {`${state?.selectedCity?.name}, ${state?.selectedCity?.sys?.country}`}
        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>

      <div className="weather-box">
        <div className="temp">
          <h1 className="main-temp">{temperature?.temp}</h1>
          <small>Feels: {temperature?.feels_like}</small>
          <br />
          <p className="wind">
            <span>
              <i className="fa-solid fa-wind"></i>
            </span>{" "}
            {state?.selectedCity?.wind?.speed} m/s
          </p>
          <br />
          <small>Humidity {state?.selectedCity?.main?.humidity}%</small>
        </div>

        <div className="weather">
          {state?.selectedCity?.weather[0]?.description}
        </div>
      </div>
      <div className="convert-button-container">
        <button
          className={`convert-button ${
            state?.selectedCity?.main?.temp > Number(12 + 273.15)
              ? "button-warm"
              : "button-cold"
          }`}
          onClick={handleClick}
        >
          Convert in {state?.unitTemp === "C" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    </div>
  );
};

export default AppBody;
