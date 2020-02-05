import { observable, action } from 'mobx'
import { ChangeEvent, createContext } from 'react'
import moment from 'moment'
import { getTimes } from 'suncalc'
import { ThemeColor } from 'type'

interface Time {
  start?: string
  end?: string
}

class State {
  @observable time: Time = {}

  @observable isTimeAuto = false
  @observable isLoading = true
  @observable isEnabled = false
  @observable themeColor: ThemeColor = 'light'
  // const [themeColor, changeThemeColor] = useState<ThemeColor>('light')

  private sunCalc = getTimes(new Date(), 16.036, 120.33)

  @action.bound
  init() {
    // Initialise isNightModeEnabled
    if (!localStorage.getItem('isNightModeEnabled')) {
      localStorage.setItem('isNightModeEnabled', 'false')
    } else {
      const value = localStorage.getItem('isNightModeEnabled') === 'true'
      this.isEnabled = value
    }
  }

  // Handles Change input for time
  @action.bound
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.time = {
      ...this.time,
      [event.currentTarget.name]: event.currentTarget.value,
    }
  }

  // Save to localStorage
  @action.bound
  submit = () => {
    try {
      if (this.isEnabled) localStorage.setItem('isNightModeEnabled', 'true')
      else localStorage.setItem('isNightModeEnabled', 'false')

      if (this.isTimeAuto) localStorage.setItem('isTimeAuto', 'true')
      else localStorage.setItem('isTimeAuto', 'false')

      if (this.time.start && this.time.end) {
        localStorage.setItem('start', this.time.start)
        localStorage.setItem('end', this.time.end)
      }
      this.setDefaultTheme()
    } catch (error) {
      return { error: 'An error has occured' }
    }
    return { success: 'Saved!' }
  }

  // Toggle Night Mode
  @action.bound
  toggleNightMode() {
    this.isEnabled = !this.isEnabled
  }

  // Setting time as Automatic
  @action.bound
  setTimeAsAuto = () => {
    if (!this.isTimeAuto) {
      this.time = {
        start: this.timeStampToTime(this.sunCalc.sunrise.getTime()),
        end: this.timeStampToTime(this.sunCalc.sunset.getTime()),
      }
    }

    this.isTimeAuto = !this.isTimeAuto
  }

  // Populating Time Values
  @action.bound
  populateTime = () => {
    this.isLoading = true

    if (localStorage.getItem('isTimeAuto') === 'true') {
      this.time = {
        start: this.timeStampToTime(this.sunCalc.sunrise.getTime()),
        end: this.timeStampToTime(this.sunCalc.sunset.getTime()),
      }
      this.isTimeAuto = !this.isTimeAuto
    } else {
      const start = localStorage.getItem('start')
      const end = localStorage.getItem('end')
      if (start !== null && end !== null) {
        this.time = { start, end }
      }
    }
    this.isLoading = false
  }

  // Check if Night Mode is Enabled
  // The Default Theme will be change to dark if
  // Night Mode Enabled
  @action.bound
  setDefaultTheme() {
    if (this.isEnabled) {
      const localTime = moment().format('HH:mm')
      const { start, end } = this.time
      if (start && end) {
        if (localTime >= start && localTime < end) {
          localStorage.setItem('themeColor', 'dark')
          this.themeColor = 'dark'
        } else {
          this.themeColor = 'light'
          localStorage.setItem('themeColor', 'light')
        }
      }
    }
  }

  @action.bound
  changeTheme = () => {
    this.themeColor = localStorage.getItem('themeColor') as ThemeColor
  }

  private timeStampToTime = (time: number) => {
    const formattedDate = moment(time).format('HH:mm')
    return formattedDate
  }
}

export default createContext(new State())
