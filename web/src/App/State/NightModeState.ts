import { observable, action } from 'mobx'
import { ChangeEvent, createContext } from 'react'
import moment from 'moment'
import { GetTimesResult } from 'suncalc'

class State {
  @observable time = {
    start: '06:00',
    end: '18:00',
  }

  @observable isTimeAuto = false
  @observable isLoading = true
  @observable isEnabled = false

  @action.bound
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.time = {
      ...this.time,
      [event.currentTarget.name]: event.currentTarget.value,
    }
  }

  @action.bound
  submit = () => {
    try {
      if (this.isEnabled) localStorage.setItem('isNightModeEnabled', 'true')
      else localStorage.setItem('isNightModeEnabled', 'false')

      if (this.isTimeAuto) localStorage.setItem('isTimeAuto', 'true')
      else localStorage.setItem('isTimeAuto', 'false')

      localStorage.setItem('start', this.time.start)
      localStorage.setItem('end', this.time.end)
    } catch (error) {
      return { error: 'An error has occured' }
    }
    return { success: 'Saved!' }
  }

  @action.bound
  toggleNightMode() {
    this.isEnabled = !this.isEnabled
  }

  @action.bound
  setTimeAsAuto = (sunCalc: GetTimesResult) => {
    if (!this.isTimeAuto) {
      this.time = {
        start: this.timeStampToTime(sunCalc.sunrise.getTime()),
        end: this.timeStampToTime(sunCalc.sunset.getTime()),
      }
    }

    this.isTimeAuto = !this.isTimeAuto
  }

  @action.bound
  populateTime = (sunCalc: GetTimesResult) => {
    this.isLoading = true

    if (localStorage.getItem('isTimeAuto') === 'true') {
      this.time = {
        start: this.timeStampToTime(sunCalc.sunrise.getTime()),
        end: this.timeStampToTime(sunCalc.sunset.getTime()),
      }
      this.isTimeAuto = !this.isTimeAuto
    } else {
      const start = localStorage.getItem('start')
      const end = localStorage.getItem('end')
      if (start !== null && end !== null) {
        this.time = {
          start,
          end,
        }
      }
    }
    this.isLoading = false
    // }
  }

  private timeStampToTime = (time: number) => {
    const formattedDate = moment(time).format('HH:mm')
    return formattedDate
  }
}

export default createContext(new State())
