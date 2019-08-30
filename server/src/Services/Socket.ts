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

  /**
   * Triggered the namespace is created
   */
  public $onNamespaceInit(nsp: SocketIO.Namespace) {}

  /**
   * Triggered when a new client connects to the Namespace.
   */
  public $onConnection(
    @Socket socket: SocketIO.Socket,
    @SocketSession session: SocketSession
  ) {}

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  public $onDisconnect(@Socket socket: SocketIO.Socket) {}
}
