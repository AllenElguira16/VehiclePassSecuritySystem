import { Server as overnightjsServer} from '@overnightjs/core'
import controllers from './controllers';
import cors from 'cors';

class Server extends overnightjsServer{
  constructor() {
    super()
    this.app.use(cors({
      credentials: true
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