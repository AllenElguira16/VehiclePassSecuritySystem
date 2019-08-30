import {
  IO,
  Nsp,
  Socket,
  SocketService,
  SocketSession,
  Namespace
} from "@tsed/socketio";
import SocketIO from "socket.io";

@SocketService("/my-namespace")
export class MySocketService {
  @Namespace public nsp: Namespace | undefined;

  public newVehicle() {
    if (this.nsp) this.nsp.emit("newVehicle");
  }
}
