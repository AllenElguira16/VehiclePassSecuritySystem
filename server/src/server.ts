import { Server as overnightjsServer } from "@overnightjs/core";
import controllers from "./Controllers";
import { ConnectionOptions, connect } from "mongoose";

export class Server extends overnightjsServer {
  // constructor() {
  //   super();
  // }

  public middleware(middlewares: any[]) {
    middlewares.forEach(middleware => {
      // console.log(middleware());
      this.app.use(middleware);
    });
  }

  public setting(settings: Setting[]) {
    settings.forEach(setting => {
      this.app.set(setting.name, setting.value);
    });
  }

  public async connectMongoDB(mongoKey: string, config: ConnectionOptions) {
    try {
      await connect(
        mongoKey,
        config
      );
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  public start(port: number) {
    super.addControllers(controllers);
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}
