import React, { FC } from 'react';
import { Container, Grid, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Search, AddBox } from '@material-ui/icons';

const UsersForm: FC = () => {
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
            <IconButton>
              <AddBox />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UsersForm;