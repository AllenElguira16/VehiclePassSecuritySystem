import { Service } from '@tsed/common'
import { Board, Led, Servo } from 'johnny-five'

@Service()
class ArduinoService {
  /**
   * Initialize Board
   */
  constructor() {
    new Board()
  }

  public timeout = 8000

  /**
   * Open boom barrier
   */
  public openBoomBarrier(): void {
    const led = new Led(13)
    led.on()
    setTimeout(() => led.off(), this.timeout)
    const servo = new Servo({
      pin: 11,
      startAt: 90,
    })
    setTimeout(() => servo.to(0), this.timeout) // Pull up
    servo.home() // Pull down
  }

  /**
   * Warn
   */
  public warn(): void {
    const led = new Led(12)
    led.on()
    setTimeout(() => led.off(), this.timeout)
  }
}

export default ArduinoService
