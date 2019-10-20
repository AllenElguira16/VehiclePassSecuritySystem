import React, { FC } from 'react'
import LNUBanner from 'Assets/images/LNUBanner.webp'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core'
import { useStyles } from 'Assets/styles'
// import Header from 'Components/Header'

const Home: FC = () => {
  const styles = useStyles()
  const boxContents = [
    {
      title: 'What is Vehicle Pass Security System',
      content:
        'Vehicle Pass Security System is a security device to ensure the safety of the lycean community',
    },
    {
      title: 'What is Vehicle Pass?',
      content:
        'A Vehicle Pass is a unique sticker that contains the info of the vehicle and the owner itself',
    },
    {
      title: 'How does it work?',
      content:
        'Vehicle Pass Security System works on a hardware called Arduino that controls the boom barrier with a scanner',
    },
  ]

  return (
    <>
      <Grid container alignItems="center" spacing={4}>
        <Grid item md={7}>
          <img src={LNUBanner} alt="LNU Front Gate" style={{ width: '100%' }} />
        </Grid>
        <Grid item md={5}>
          <Typography variant="h3" style={{ lineHeight: 1.2 }}>
            Vehicle Pass Security System
          </Typography>
          <Typography style={{ lineHeight: 4 }}>
            Stay secured, Stay assured
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={styles.gridContainer}
        alignItems="stretch"
        spacing={4}
      >
        {boxContents.map(boxContent => (
          <Grid item md={4} className={styles.cardGrid}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Typography variant="h5" gutterBottom>
                  {boxContent.title}
                </Typography>
                <Typography>{boxContent.content}</Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button variant="contained" color="primary">
                  More Info
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home
