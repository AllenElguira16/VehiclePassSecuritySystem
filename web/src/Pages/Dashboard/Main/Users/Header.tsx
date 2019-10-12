import React, { FC, useContext } from 'react'
import { Container, Grid, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core'
import { Search, AddBox } from '@material-ui/icons'
import { UsersTableState } from './UsersTable/state'

const UsersForm: FC = () => {
  const { toggleFormInput } = useContext(UsersTableState)

  return (
    <Container>
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
            <IconButton onClick={toggleFormInput}>
              <AddBox />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UsersForm
