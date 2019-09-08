import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import '@tsed/mongoose';
import '@tsed/socketio';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
const mongoInstance = connectMongo(session);

@ServerSettings({
  rootDir: __dirname,
  acceptMimes: ['accept/json'],
  httpPort: 8000,
  httpsPort: 8080,
  socketIO: {},
  mount: {
    '/api': '${rootDir}/Controllers/**/*.ts',
  },
  mongoose: {
    url:
      'mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/vehicle-pass-security-system?retryWrites=true&w=majority',
    connectionOptions: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  },
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<void> {
    this.set('trust proxy', 1);
    this.set('json spaces', 2);
    this.use(GlobalAcceptMimesMiddleware)
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(
        cors({
          origin: ['http://192.168.100.5:19000', 'http://192.168.100.5:3000', 'http://localhost:3000'],
          credentials: true,
          optionsSuccessStatus: 200,
        }),
      )
      .use(
        session({
          secret: 'the-greatest-secret-key',
          resave: false,
          saveUninitialized: true,
          store: new mongoInstance({
            mongooseConnection: mongoose.connection,
          }),
          cookie: {
            sameSite: true,
            secure: false,
          },
        }),
      );
  }
}
