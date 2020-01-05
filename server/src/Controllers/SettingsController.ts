import { Controller, Get, Post, BodyParams } from '@tsed/common'
import ArduinoService from 'Providers/ArduinoService'
import { Response } from 'type'
import { MySocketService } from 'Providers/SocketService'

interface ChangeTimeout {
  timeout: string
}

@Controller('/settings')
class SettingsController {
  constructor(private socketService: MySocketService) {}

  /**
   * Get timeout value for arduino
   */
  @Get('/timeout')
  public async getTimeOut() {
    return { value: this.socketService.timeout }
  }

  /**
   * Change Timeout Value returns success if no errors
   * @param param a value used to replace the current timeout value
   */
  @Post('/timeout')
  public changeTimeOut(@BodyParams() param: ChangeTimeout): Response {
    this.socketService.timeout = parseInt(param.timeout)
    this.socketService.nsp.emit('getTimeout', this.socketService.timeout)
    return { success: true }
  }
}

export default SettingsController
