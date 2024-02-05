//* pakages
import React, { useState } from "react";

//* locales
import DGXLogo from "./components/DGXLogo";
import DGXContainer from "./components/DGXContainer";
import List from "./mock/drop-items.json";
import DGXDropdown from "./components/DGXDropdown";

//* styles
import "./App.css";
import "./fonts/font.css";

function App() {
  //* react state
  const [result, setResult] = useState("هیچ !");

  //! render your custom option as well as you want
  const renderOption = (option) => (
    <>
      {option?.img && (
        <img className="option-image" src={option.img} alt={option.name} />
      )}

      <span>{option.name}</span>
    </>
  );

  //! logic of your set value for send to backend
  const onSelect = (option) => {
    setResult(option);
  };

  //! customise you're received data from backend as well as you want
  const selectOptions = List.map((item) => ({
    key: item.key,
    name: item.name,
    img: item.img ? item.img : "",
  }));

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            placeHolder="یک مورد را انتخاب کنید"
            options={selectOptions}
            onSelect={onSelect}
            renderOption={renderOption}
          />
        </div>
        <div className="result">{result.key ? result.name : result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
