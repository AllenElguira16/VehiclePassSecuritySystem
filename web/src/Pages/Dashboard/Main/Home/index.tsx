import React, { FC } from 'react'
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from '@material-ui/core'

const Home: FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
