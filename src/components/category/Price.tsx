import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LuChevronRight } from "react-icons/lu";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { setPriceRange } from "../../store/priceReducer"; // Corrected import

// Define Range interface
export interface Range {
  min: number;
  max: number;
}

const Price: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const dispatch = useDispatch();
  const priceRange = useSelector((state: RootState) => state.price.priceRange);

  // Function to handle range values change
const handleValuesChange = (newValues: number | Range) => {
  if (typeof newValues === "number") {
    const updatedValues: Range = {
      min: priceRange.min,
      max: priceRange.max,
      [newValues === priceRange.min ? "min" : "max"]: newValues,
    };
    console.log("Updated Price Range:", updatedValues); // values
    dispatch(setPriceRange(updatedValues)); // Dispatching the action creator
  } else {
    console.log("Updated Price Range:", newValues); //values
    dispatch(setPriceRange(newValues)); // Dispatching the action creator
  }
};


  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="Filter-item" onClick={handleClick}>
        <h3 className="font-satoshiBold text-lg">Price</h3>
        <LuChevronRight
          className={`${click ? "-rotate-90" : "rotate-0"} transition`}
        />
      </div>

      {click && (
        <div>
          <style>
            {`
              .input-range .input-range__slider {
                background-color: black;
              }
              .input-range .input-range__track--active {
                background-color: black;
                transition: background-color 0.1s ease;
              `}
          </style>
          <InputRange
  minValue={0}
  maxValue={200}
  value={{ min: Math.max(priceRange.min, 0), max: Math.min(priceRange.max, 200) }} // Ensure value is within range
  onChange={handleValuesChange}
  formatLabel={(value) => `$${value}`}
        />
        </div>
      )}
    </>
  );
};

export default Price;
