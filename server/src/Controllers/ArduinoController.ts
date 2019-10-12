import { Controller, Get } from '@tsed/common'
import { Board, Led, Servo } from 'johnny-five'

@Controller('/arduino')
class ArduinoController {
  /**
   * Initialize Board
   */
  constructor() {
    // new Board();
  }

  private timeout = 8000

  /**
   * Open boom barrier
   */
  @Get('/open')
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
  @Get('/warn')
  public warn(): void {
    const led = new Led(12)
    led.on()
    setTimeout(() => led.off(), this.timeout)
  }

  // @Get('/motor')
  // public motor(): void {
  //   const servo = new Servo({
  //     pin: 11,
  //     startAt: 90,
  //   });
  //   setTimeout(() => servo.to(0), 8000); // Pull up
  //   servo.home(); // Pull down
  // }
}

export default ArduinoController
