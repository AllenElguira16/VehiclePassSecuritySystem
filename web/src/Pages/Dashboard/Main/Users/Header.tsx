import React, { FC, useContext, ChangeEvent, useState } from 'react'
import { Search, AddBox } from '@material-ui/icons'
import { UsersState } from './Table/state'
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
} from '@material-ui/core'

type SelectType = 'firstname' | 'lastname' | 'licenseId'

const UsersForm: FC = () => {
  const { openAddForm, onClear, formState, fetchUsers } = useContext(UsersState)
  const [selectType, setSelectType] = useState<SelectType>('licenseId')
  const toggle = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    openAddForm()
    onClear()
  }

  const search = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    fetchUsers({ [selectType]: currentTarget.value })
  }

  const onSelectType = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSelectType(target.value as SelectType)
  }

  return (
    <Container maxWidth="xl">
      <Grid alignItems="center" justify="space-between" spacing={4} container>
        <Grid item>
          <Typography variant="h6">Users</Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <TextField
              InputProps={{
                placeholder: 'Search',
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={search}
            />
            <TextField select value={selectType} onChange={onSelectType}>
              {['firstname', 'lastname', 'licenseId'].map((searchType, i) => (
                <MenuItem key={i} value={searchType}>
                  {searchType}
                </MenuItem>
              ))}
            </TextField>
            <IconButton onClick={toggle}>
              <AddBox />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UsersForm
