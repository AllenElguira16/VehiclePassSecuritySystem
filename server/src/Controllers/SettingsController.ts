import { Controller, Get } from '@tsed/common'
import ArduinoService from 'Services/ArduinoService'

@Controller('/')
class SettingsController {
  constructor(private readonly arduinoService: ArduinoService) {}

  @Get()
  public hello(): string {
    return 'Hello'
  }
}

export default TestController
