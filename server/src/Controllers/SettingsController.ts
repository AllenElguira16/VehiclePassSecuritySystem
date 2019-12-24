import { Controller, Get, Post, BodyParams } from '@tsed/common'
import ArduinoService from 'Providers/ArduinoService'
import { Response } from 'type'

@Controller('/settings')
class SettingsController {
  // constructor(private readonly arduinoService: ArduinoService) {}

  @Get('/timeout')
  public getTimeOut() {
    // return { value: this.arduinoService.timeout }
  }

  @Post('/timeout')
  public changeTimeOut(@BodyParams() { timeout }: any): Response {
    // this.arduinoService.timeout = timeout
    return { success: true }
  }
}

export default SettingsController
