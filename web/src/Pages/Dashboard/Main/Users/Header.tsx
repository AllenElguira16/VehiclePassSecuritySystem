import React, { FC, useContext } from 'react'
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import { UsersState } from './state'

const UsersForm: FC = () => {
  const { openAddForm, onClear, formState } = useContext(UsersState)

  const toggle = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    openAddForm()
    onClear()
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
            />
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
