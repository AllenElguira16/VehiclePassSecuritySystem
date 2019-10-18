import React, { FC } from 'react'
import { Grid, Typography, Divider, Paper, Button } from '@material-ui/core'
import { useStyles } from 'Assets/styles'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  const styles = useStyles()
  const currentYear = new Date().getFullYear()
  return (
    <Paper className={styles.footer} elevation={15} component="footer">
      <Grid container justify="center">
        <Grid item md={6}>
          <Typography component="h1" variant="h4" align="center">
            Vehicle Pass Security System
          </Typography>
          <Typography align="center">Stay secured, Stay assured</Typography>
          <Divider />
          <Typography align="center">BSIT Students &copy; {currentYear}</Typography>
          <Typography align="center">
            <Button component={Link} to="/dashboard">
              Enter as Admin
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
