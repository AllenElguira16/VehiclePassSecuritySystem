import { Controller, Post, Get } from '@tsed/common';
import { Board, Led, Servo } from 'johnny-five';

@Controller('/arduino')
class ArduinoController {
  /**
   * Initialize Board
   */
  constructor() {
    new Board();
  }

  /**
   * Open boom barrier
   */
  @Post('/open')
  public openBoomBarrier(): void {
    const led = new Led(13);
    led.on();
    setTimeout(() => led.off(), 10000);
  }

  /**
   * Warn
   */
  @Post('/warn')
  public warn(): void {
    const led = new Led(12);
    led.on();
    setTimeout(() => led.off(), 10000);
  }

  @Get('/motor')
  public motor(): void {
    const servo = new Servo({
      pin: 11,
      startAt: 90,
    });
    // Pull up
    setTimeout(() => servo.to(0), 8000);
    // Pull down
    servo.home();
    // servo.to();
  }
}

export default ArduinoController;
