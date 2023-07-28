import React from "react";

const InputType = ({
  inputType,
  labelText,
  labelFor,
  name,
  onChange,
  value,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
