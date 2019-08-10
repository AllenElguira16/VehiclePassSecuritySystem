import { Server as overnightjsServer } from "@overnightjs/core";
import controllers from "./Controllers";
import connectMongo from "connect-mongo";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";

class Server extends overnightjsServer {
  constructor() {
    super();
    const mongoInstance = connectMongo(session);
    this.connectToDB();
    this.use(mongoInstance);
    this.app.set("json spaces", 2);
    super.addControllers(controllers);
  }

  private async connectToDB() {
    const mongoKey =
      "mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/vehicle-pass-security-system?retryWrites=true&w=majority";
    try {
      await mongoose.connect(mongoKey, {
        useNewUrlParser: true,
        useFindAndModify: false
      });
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  private use(mongoInstance: any) {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
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
    );
    this.app.use(
      session({
        secret: "the-greatest-secret-key",
        resave: false,
        saveUninitialized: true,
        store: new mongoInstance({
          mongooseConnection: mongoose.connection
        }),
        cookie: {
          sameSite: true,
          secure: false
        }
      })
    );
  }

  public start(port: number) {
    this.app.listen(port, () => {
      setTimeout(() => {
        console.log(`Server started on port ${port}`);
      }, 1000);
    });
  }
}

new Server().start(8000);
