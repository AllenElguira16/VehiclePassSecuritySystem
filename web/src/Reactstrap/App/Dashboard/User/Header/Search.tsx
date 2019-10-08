import React, { useState, FC, FormEvent, useContext } from 'react'
import { Input } from 'Reactstrap/@Components'
import { AppStore } from 'Reactstrap/Store'

interface Props {
  // value: string;
  // onChange(value: string): void;
}

const Search: FC<Props> = () => {
  const [search, setSearch] = useState('')
  const { fetchUsers } = useContext(AppStore)
  const onInputChange = async (event: FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget
    setSearch(value)
    fetchUsers({ userId: value })
  }

  return (
    <Input
      value={search}
      placeholder="search"
      onChange={onInputChange}
      icon={{
        position: 'prepend',
        iconName: 'search',
      }}
    />
  )
}

export default Search
