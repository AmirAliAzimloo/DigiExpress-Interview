//* pakages
import React, { useState } from "react";

const DGXDropdown = ({ options, onSelect, placeHolder, renderOption }) => {
  //* react state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //! handel open/close drop-down
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //! logic of set value and handel drop-down
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <>
      <div className="drop-down">
        <div
          className={`input size text color ${isOpen && "active"}`}
          onClick={toggleDropdown}
        >
          {selectedOption ? (
            <div className="item size text option-center">
              {renderOption(selectedOption)}
            </div>
          ) : (
            <span>{placeHolder}</span>
          )}
        </div>

        {isOpen && (
          <ul className="list size color">
            {options.map((option) => (
              <li
                className="item size text option-center"
                key={option.key}
                onClick={() => handleOptionClick(option)}
              >
                {/* Render custom option as well as you want */}
                {renderOption(option)}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* overlay */}
      <div className={`${isOpen ? "overlay" : "hidden"}`} onClick={toggleDropdown} />
    </>
  );
};

export default DGXDropdown;
