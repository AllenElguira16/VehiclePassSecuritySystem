import React, { FC } from 'react'
import { Grid, makeStyles, CssBaseline } from '@material-ui/core'
import LNUBanner from 'Assets/images/LNUBanner.webp'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const Home: FC = () => {
  const styles = useStyles()
  return (
    <Grid container className={styles.root} spacing={4}>
      <CssBaseline></CssBaseline>
      <Grid item lg={7}>
        <img src={LNUBanner} alt="LNUBanner" style={{ width: '100%' }} />
      </Grid>
      <Grid item lg={5}>
        <h1>Vehicle Pass Security System</h1>
        <p>Stay secured, stay assured</p>
      </Grid>
    </Grid>
  )
}

export default Home
