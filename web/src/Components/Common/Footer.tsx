import React, { FC } from 'react'
import { Grid, Typography, Divider, Paper } from '@material-ui/core'
import { useStyles } from 'styles'

const Footer: FC = () => {
  const styles = useStyles()
  return (
    <Paper className={styles.footer} elevation={4}>
      <Grid container justify="center" className={styles.gridContainer}>
        <Grid item md={4} style={{}}>
          <Typography variant="h4" align="center">
            Vehicle Pass Security System
          </Typography>
          <Typography align="center">Stay secured, Stay assured</Typography>
          <Divider />
          <Typography align="center">BSIT Students &copy; {new Date().getFullYear()}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
