import { Controller, Get, Post, Inject, PathParams } from '@tsed/common'
import { History } from 'Model/History'
import { MongooseModel } from '@tsed/mongoose'
import { Response } from 'type'

interface PathParamsInterface {
  id: string
}

Controller('/history')
class HistoryController {
  constructor(@Inject(History) private readonly history: MongooseModel<History>) {}

  @Get()
  public async getHistory() {
    return await this.history.find().exec()
  }

  @Post()
  public async createHistory(@PathParams() params: PathParamsInterface): Promise<Response> {
    const { id } = params
    const history = await this.history.findOne({ userId: id }).exec()
    // if (history) {
    if (history && !history.timeIn) {
      this.history.create({ timeIn: new Date() })
      return { success: true }
    } else if (history && history.timeIn && !history.timeOut) {
      this.history.create({ timeOut: new Date() })
      return { success: true }
    } else {
      return { error: 'An error occured' }
    }
  }
}

export default HistoryController
