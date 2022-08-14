import React, { useState, FC } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Wrapper from "../../atoms/Wrapper";
import ErrorMessage from "../../atoms/ErrorMessage";

interface SearchBarProps {
  handleSubmit: () => void;
  error?: string;
}

const SearchBar: FC<SearchBarProps> = ({ handleSubmit, error }) => {
  const [query, setQuery] = useState("");

  return (
    <Wrapper type="main" interactive={true}>
      <form className="dse-search-bar" onSubmit={() => handleSubmit()}>
        <div style={{ flexGrow: 1 }}>
          <Input
            query={query}
            handleInputChange={(evt) => setQuery(evt.target.value)}
          />
        </div>
        {error && (
          <div className="dse-search-bar__error">
            <ErrorMessage content={error} />
          </div>
        )}
        <Button label="Search" />
      </form>
    </Wrapper>
  );
};

export default SearchBar;
