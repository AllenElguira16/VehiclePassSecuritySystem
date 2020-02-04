import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useStyles } from 'Assets/styles'
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormGroup,
} from '@material-ui/core'
import sunCalc from 'suncalc'
import moment from 'moment'
// import { Paper } from '@material-ui/co'

const NightModeSettings: FC = () => {
  const styles = useStyles()
  const [state, setState] = useState({
    start: '06:00',
    end: '18:00',
  })
  const [isAutoTime, setAsAutoTime] = useState(false)
  const time = sunCalc.getTimes(new Date(), 16.036, 120.33)

  const timeStampToTime = (time: number) => {
    const formattedDate = moment(time).format('HH:mm')
    return formattedDate
  }

  useEffect(() => {
    if (isAutoTime) {
      setState({
        start: timeStampToTime(time.sunrise.getTime()),
        end: timeStampToTime(time.sunset.getTime()),
      })
    }
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const setAutoTime = () => {
    setState({
      start: timeStampToTime(time.sunrise.getTime()),
      end: timeStampToTime(time.sunset.getTime()),
    })
    setAsAutoTime(!isAutoTime)
  }

  const submit = () => {
    // localStorage.setItem('isAutoTime', );
  }

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item md={6}>
        <Paper className={styles.signInContainer}>
          <h2>Schedule Night Light</h2>
          <form onSubmit={submit}>
            <Grid container direction="row" justify="space-around">
              <TextField
                id="time"
                label="Start Time"
                type="time"
                value={state.start}
                name="start"
                inputProps={{
                  step: 300, // 5 min
                }}
                disabled={isAutoTime}
                onChange={onChange}
              />
              <TextField
                id="time"
                label="End Time"
                type="time"
                value={state.end}
                name="end"
                inputProps={{
                  step: 300, // 5 min
                }}
                disabled={isAutoTime}
                onChange={onChange}
              />
            </Grid>
            <FormGroup>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox checked={isAutoTime} onChange={setAutoTime} />
                  }
                  label="Set Time same as Sunset and Sunrise?"
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <Button color="primary" variant="contained">
                  Apply
                </Button>
              </FormControl>
            </FormGroup>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default NightModeSettings
