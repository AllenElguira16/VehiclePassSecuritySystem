import { Controller, Get, Post, Inject, PathParams, Delete } from '@tsed/common'
import { History } from 'Models/History'
import { MongooseModel } from '@tsed/mongoose'
import { Response } from 'type'

interface PathParamsInterface {
  id: string
}

@Controller('/history')
class HistoryController {
  constructor(
    @Inject(History) private readonly history: MongooseModel<History>,
  ) {}

  @Get()
  public async getHistory() {
    return await this.history.find().exec()
  }

  @Delete('/:id')
  public async deleteHistory(@PathParams()
  {
    id,
  }: PathParamsInterface): Promise<Response> {
    console.log(id)
    try {
      const res = await this.history.findByIdAndDelete(id)
      if (!res) throw `HistoryID: ${id} Error deleting`
    } catch (error) {
      if (error) return { error }
    }
    return { success: `HistoryID: ${id} deleted successfully` }
  }
}

export default HistoryController
