import React, { useState, FC, FormEvent, useContext } from 'react'
import Input from '@Components/Input'
import { AppStore } from 'Store'

interface Props {
  // value: string;
  // onChange(value: string): void;
}

const Search: FC<Props> = () => {
  const [search, setSearch] = useState('')
  const { fetchVehicles } = useContext(AppStore)
  const onInputChange = async (event: FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget
    fetchVehicles(value)
    setSearch(value)
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
