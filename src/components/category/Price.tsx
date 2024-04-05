import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import InputRange, { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";

export interface PriceProps {
  min: number;
  max: number;
}

const Price: React.FC<PriceProps> = ({ min, max }) => {
  const [values, setValues] = useState<Range>({ min, max });
  const [click, setClick] = useState(false);

  const handleValuesChange = (newValues: number | Range) => {
    // Check if newValues is a number (min or max) or a Range object
    if (typeof newValues === "number") {
      // Update only the min or max value based on the number received
      const updatedValues = {
        ...values,
        [newValues === min ? "min" : "max"]: newValues,
      };
      setValues(updatedValues);
    } else {
      // Update the entire Range object
      setValues(newValues);
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
            minValue={min}
            maxValue={max}
            value={values}
            onChange={handleValuesChange}
            formatLabel={(value) => `$${value}`}
          />
        </div>
      )}
    </>
  );
};

export default Price;
