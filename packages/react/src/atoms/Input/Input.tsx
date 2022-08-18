import React, { FC } from "react";
import searchIcon from "../../assets/icon-search.svg";

interface InputProps {
  query: string | null;
  handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ query, handleInputChange }) => {
  return (
    <fieldset className="dse-fieldset">
      <img className="dse-fieldset__icon" src={searchIcon} alt="Search user" />
      <label className="dse-visually-hidden" htmlFor="query">
        Search
      </label>
      <input
        className={`dse-fieldset__input ${
          query ? "dse-fieldset__input--xs" : ""
        }`}
        onChange={(evt) => handleInputChange(evt)}
        value={query || ""}
        id="query"
        type="text"
        name="query"
        placeholder="Search GitHub username…"
      />
    </fieldset>
  );
};

export default Input;
