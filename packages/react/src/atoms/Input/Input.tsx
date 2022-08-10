import React, { useState, FC } from "react";
import searchIcon from "../../assets/icon-search.svg";

interface InputProps {
  query: string | null;
}

const Input: FC<InputProps> = ({ query }) => {
  const [value, setValue] = useState<string | null>(query);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <fieldset className="dse-fieldset">
      <img className="dse-fieldset__icon" src={searchIcon} alt="Search user" />
      <label className="dse-visually-hidden" htmlFor="query">
        Search
      </label>
      <input
        className={`dse-fieldset__input ${
          value ? "dse-fieldset__input--xs" : ""
        }`}
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
