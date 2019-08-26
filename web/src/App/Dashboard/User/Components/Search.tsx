import React from "react";
import Input from "Components/Input";

interface Props {
  value: string;
  onChange(value: string): void;
}

const Search: React.FC<Props> = ({ onChange, value }) => {
  const onInputChange = async (e: React.FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    onChange(value);
  };

  return (
    <Input
      value={value}
      placeholder="search"
      onChange={onInputChange}
      icon={{
        position: "prepend",
        iconName: "search"
      }}
    />
  );
};

export default Search;
