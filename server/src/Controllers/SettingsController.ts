import { Controller, Get } from '@tsed/common'
// import ArduinoService from 'Services/ArduinoService'

@Controller('/settings')
class SettingsController {
  // constructor(private readonly arduinoService: ArduinoService) {}

  @Get('/get')
  public getTimeOut() {
    // return this.arduinoService.timeout
  }
}

export default SettingsController
