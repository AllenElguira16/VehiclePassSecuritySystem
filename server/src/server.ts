import express from 'express'
import controllers from './controllers';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import { Server as overnightjsServer} from '@overnightjs/core'

class Server extends overnightjsServer{
  constructor() {
    super();
    let mongoInstance = connectMongo(session);
    mongoose.connect(this.mongoKey);
    this.use(mongoInstance);
    this.app.set("json spaces", 2);
    super.addControllers(controllers);
  }
  
  private mongoKey = 'mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/socialapp?retryWrites=true&w=majority';

  private use(mongoInstance: any) {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    this.app.use(cors({
      origin: ['http://192.168.100.5:19000', 'http://192.168.100.5:3000'],
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      credentials: true,
      optionsSuccessStatus: 200
    }));
    this.app.use(session({
      secret: 'the-greatest-secret-key',
      resave: false,
      saveUninitialized: true,
      store: new mongoInstance({
        mongooseConnection: mongoose.connection
      })
    }));
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