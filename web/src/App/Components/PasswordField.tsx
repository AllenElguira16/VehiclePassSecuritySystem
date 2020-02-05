import React, { FC, ChangeEvent, useState, MouseEvent } from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  makeStyles,
  createStyles,
} from '@material-ui/core'
// import { values } from 'mobx'
import { Visibility, VisibilityOff } from '@material-ui/icons'

interface Props {
  label: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const useStyles = makeStyles(theme =>
  createStyles({
    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  }),
)

const PasswordField: FC<Props> = ({ onChange, label }) => {
  const styles = useStyles()
  const [showPassword, setShowPasswrod] = useState(false)

  const handleClickShowPassword = () => {
    setShowPasswrod(!showPassword)
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <FormControl className={styles.margin} fullWidth>
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        fullWidth
      />
    </FormControl>
  )
}

export default PasswordField
