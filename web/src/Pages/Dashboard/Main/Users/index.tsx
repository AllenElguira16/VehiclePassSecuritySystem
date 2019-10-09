import React, { FC, useEffect, useContext } from 'react'
import { Paper, TextField, Grid, Button } from '@material-ui/core'
import { UsersState } from './state'
import { observer } from 'mobx-react-lite'
import UsersTable from './UsersTable'

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
      {/* <Paper> */}
      <UsersTable />
      {/* </Paper> */}
    </>
  )
}

export default observer(Users)
