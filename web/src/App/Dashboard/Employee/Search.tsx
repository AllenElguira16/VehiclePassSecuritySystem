import React, { useState } from "react";
import Input from "Components/Input";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <Input
      value={search}
      placeholder="search"
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
      }}
      icon={{
        position: "prepend",
        iconName: "search"
      }}
    />
  );
};

export default Search;
