import { Controller, Post, Get } from '@tsed/common';
import { Board, Led, Motor } from 'johnny-five';

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
  public openMotor(): void {
    const motor = new Motor([3, 12]);
    motor.reverse(255);
  }
}

export default ArduinoController;
