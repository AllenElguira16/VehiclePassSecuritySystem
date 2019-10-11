import React, { FC, useEffect, useContext } from 'react'
import { Paper, TextField, Grid, Button, Typography, IconButton, InputAdornment, Container } from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import UsersTable from './UsersTable'
import { AddBox, Search } from '@material-ui/icons'

const Users: FC = () => {
  const { fetchUsers } = useContext(UsersState)

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <>
      {/* <form>
        <Grid alignItems="center" justify="space-between" container>
          <Grid item>
            <TextField
              id="outlined-name"
              label="Search"
              // value={values.name}
              // onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Add User
            </Button>
          </Grid>
        </Grid>
      </form> */}
      <Paper>
        <Container>
          <Grid alignItems="center" justify="space-between" spacing={4} container>
            <Grid item>
              <Typography variant="h5">Users</Typography>
            </Grid>
            <Grid item>
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
              <IconButton>
                <AddBox />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        <UsersTable />
      </Paper>
    </>
  )
}

export default observer(Users)
