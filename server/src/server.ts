import express from 'express'
import { Server as overnightjsServer} from '@overnightjs/core'
import controllers from './controllers';
import cors from 'cors';

class Server extends overnightjsServer{
  constructor() {
    super()
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(express.json())
    this.app.use(cors({
      origin: ['http://192.168.100.5:19000', 'http://192.168.100.5:3000'],
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      credentials: true,
      optionsSuccessStatus: 200
    }))
    this.app.set("json spaces", 2)
    super.addControllers(controllers)
  }

  public start(port: Number) {
    this.app.listen(port, () => {
      console.log('\x1Bc')
      console.clear()
      console.log('Compiling...')
      setTimeout(() => {
        console.clear()
        console.log(`Server started on port ${port}`)
      }, 1000)
    })
  }
}

(new Server()).start(8000);