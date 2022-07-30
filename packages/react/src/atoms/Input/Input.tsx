import React, { useState, FC } from "react";

interface InputProps {
  query: string | null;
}

const Input: FC<InputProps> = ({ query }) => {
  const [value, setValue] = useState<string | null>(query);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <fieldset className="dse-input">
      <label className="dse-visually-hidden" htmlFor="query">
        Search
      </label>
      <input
        className={`dse-input-field ${value ? "dse-input__field--xs" : ""}`}
        onChange={(evt) => handleInputChange(evt)}
        value={value ? value : ""}
        id="query"
        type="text"
        name="query"
        placeholder="Search GitHub username…"
      />
    </fieldset>
  );
};

export default Input;
