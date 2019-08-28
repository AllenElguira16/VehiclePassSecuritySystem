// import { Server as overnightjsServer } from "@overnightjs/core";
import {
  ServerLoader,
  ServerSettings,
  GlobalAcceptMimesMiddleware
} from "@tsed/common";
import "@tsed/mongoose";
// import controllers from "./Dump";
// import { ConnectionOptions, connect } from "mongoose";
import express from "express";
import cors from "cors";
import session from "express-session";

@ServerSettings({
  rootDir: __dirname,
  acceptMimes: ["accept/json"],
  httpPort: "127.0.0.1:8000",
  // port: 8000
  mount: {
    "/api": "${rootDir}/Controllers/**/*.ts"
  },
  mongoose: {
    url:
      "mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/vehicle-pass-security-system?retryWrites=true&w=majority",
    connectionOptions: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  }
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<any> {
    this.set("trust proxy", 1);
    this.set("json spaces", 2);
    this.use(GlobalAcceptMimesMiddleware)
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(
        cors({
          origin: [
            "http://192.168.100.5:19000",
            "http://192.168.100.5:3000",
            "http://localhost:3000"
          ],
          methods: ["GET", "POST", "DELETE", "PUT"],
          credentials: true,
          optionsSuccessStatus: 200
        })
      )
      .use(
        session({
          secret: "the-greatest-secret-key",
          resave: false,
          saveUninitialized: true,
          // store: new mongoInstance({
          //   mongooseConnection: mongoose.connection
          // }),
          cookie: {
            sameSite: true,
            secure: false
          }
        })
      );

    // return null;
  }
}
// export class Server extends ServerLoader {
//   private $middlewares: any[] = [];

//   public middleware(middlewares: any[]) {
//     this.$middlewares = middlewares; // this.$middlewares.push(middlewares);
//   }

//   public setting(settings: Setting[]) {
//     settings.forEach(setting => {
//       this.set(setting.name, setting.value);
//     });
//   }

//   public async connectMongoDB(mongoKey: string, config: ConnectionOptions) {
//     try {
//       await connect(
//         mongoKey,
//         config
//       );
//       console.log("MongoDB Connected Successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   public $beforeRoutesInit() {
//     this.use(GlobalAcceptMimesMiddleware);
//     this.$middlewares.forEach((middlewares: () => void) => {
//       this.use(middlewares);
//     });
//     return null;
//   }

//   // public start(port: number) {
//   //   super.addControllers(controllers);
//   //   this.app.listen(port, () => {
//   //     console.log(`Server started on port ${port}`);
//   //   });
//   // }
// }
