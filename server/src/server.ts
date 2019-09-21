import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import '@tsed/mongoose';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
const mongoInstance = connectMongo(session);

@ServerSettings({
  rootDir: __dirname,
  acceptMimes: ['accept/json'],
  httpPort: process.env.PORT || 8000,
  httpsPort: process.env.PORT || 8080,
  // socketIO: {},
  mount: {
    '/': '${rootDir}/Controllers/**/*.ts',
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
      .use(helmet())
      .use(
        cors({
          origin: (origin, callback) => {
            const whiteList = [
              'https://vehicle-pass-security-system.herokuapp.com',
              'http://192.168.100.5',
              'http://localhost',
            ];
            if (origin) {
              const parsedOrigin = origin.replace(/(https?:\/\/.+)\:.+/, '$1');
              if (whiteList.indexOf(parsedOrigin) === -1 || !origin) return callback(new Error('Not allowed by cors'));
              // else callback(new Error('Not allowed by cors'));
            }
            return callback(null, true);
          },
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
            // sameSite: true,
            secure: 'auto',
          },
        }),
      );
  }
}
