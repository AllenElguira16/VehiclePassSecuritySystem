import React, { useState } from "react";
import Input from "Components/Input";

interface Props {
  onSearch(value: string): void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    onSearch(e.currentTarget.value);
  };

  return (
    <Input
      value={search}
      placeholder="search"
      onChange={onChange}
      icon={{
        position: "prepend",
        iconName: "search"
      }}
    />
  );
};

export default Search;
