import { Controller, Get } from '@tsed/common'

@Controller('/')
class TestController {
  @Get()
  public hello(): string {
    return 'Hello'
  }
}

export default TestController
