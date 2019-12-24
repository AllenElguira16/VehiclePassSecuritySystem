import { Controller, Get } from '@tsed/common'
import { MySocketService } from 'Providers/SocketService'

@Controller('/')
class TestController {
  constructor(private socketService: MySocketService) {}

  @Get('/open')
  public open() {
    this.socketService.openBoomBarrier()
    return 'Go!'
  }

  @Get('/warn')
  public warn() {
    this.socketService.warn()
    return 'Go!'
  }

  @Get()
  public hello(): string {
    return 'Hello'
  }
}

export default TestController
