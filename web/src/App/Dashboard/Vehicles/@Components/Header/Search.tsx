import React, { useState, FC, FormEvent } from "react";
import Input from "@Components/Input";

interface Props {
  // value: string;
  // onChange(value: string): void;
}

const Search: FC<Props> = () => {
  const [search, setSearch] = useState("");
  const onInputChange = async (event: FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget;
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
