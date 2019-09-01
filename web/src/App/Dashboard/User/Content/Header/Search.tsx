import React, { useState } from "react";
import Input from "@Components/Input";

interface Props {
  // value: string;
  // onChange(value: string): void;
}

const Search: React.FC<Props> = () => {
  const [search, setSearch] = useState("");
  const onInputChange = async (e: React.FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    setSearch(value);
  };

  return (
    <Input
      value={search}
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
