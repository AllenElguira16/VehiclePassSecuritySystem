import React, { FC, useContext, ChangeEvent } from 'react'
import NightModeState from 'App/State/NightModeState'
import {
  TextField,
  FormControlLabel,
  Switch,
  Button,
  FormControl,
  FormGroup,
  makeStyles,
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'

const useLocalStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
  },
})

interface Props {
  onSubmit(event: ChangeEvent<HTMLFormElement>): void
}

const Forms: FC<Props> = ({ onSubmit }) => {
  const localStyles = useLocalStyles()
  const {
    time,
    isTimeAuto,
    onChange,
    setTimeAsAuto,
    isEnabled,
    toggleNightMode,
  } = useContext(NightModeState)

  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <FormControlLabel
          // value={isEnabled}
          control={
            <Switch
              checked={isEnabled}
              color="primary"
              onChange={toggleNightMode}
            />
          }
          label="Enable Scheduled Night Mode"
          labelPlacement="start"
          classes={localStyles}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isTimeAuto}
              color="primary"
              onChange={setTimeAsAuto}
            />
          }
          label="Auto Detect from Sunrise/Sunset"
          labelPlacement="start"
          classes={localStyles}
          disabled={!isEnabled}
        />
      </FormGroup>
      <FormGroup row style={{ justifyContent: 'space-between' }}>
        <FormControl>
          <TextField
            id="start-time"
            label="Start Time"
            type="time"
            value={time.start}
            name="start"
            inputProps={{
              step: 300, // 5 min
            }}
            disabled={isTimeAuto || !isEnabled}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="end-time"
            label="End Time"
            type="time"
            value={time.end}
            name="end"
            inputProps={{
              step: 300, // 5 min
            }}
            disabled={isTimeAuto || !isEnabled}
            onChange={onChange}
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <Button color="primary" variant="contained" type="submit">
            Apply
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  )
}

export default observer(Forms)
