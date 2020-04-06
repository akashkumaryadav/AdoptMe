import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-label-${label.replace(" ", "").toLowerCase()}`;
  const DropDown = () => (
    <label htmlFor={id}>
      <select
        id={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={options.length === 0}
      >
        <option>ALL</option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, setState];
};
export default useDropDown;
