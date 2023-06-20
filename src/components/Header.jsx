import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import fetchCityWeatherInfo from "../service/fetchWeather";

const Header = () => {
  const [state, setState] = useContext(AppContext);

  const handleClick = async () => {
    const response = await fetchCityWeatherInfo(
      (state?.search || "Montreal").toLowerCase()
    );
    setState((draft) => {
      draft.selectedCity = response;
    });
    // console.log(response);
  };
  return (
    <>
      <h1 className="text-header"> Weather App</h1>
      <div className="search-box">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={state.search}
            onChange={(e) => {
              setState((draft) => {
                draft.search = e.target.value;
              });
            }}
          />
          <button
            className={`search-button + ${
              state?.selectedCity?.main?.temp > Number(12 + 273.15)
                ? "button-warm"
                : "button-cold"
            }`}
            onClick={handleClick}
          >
            Find
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
