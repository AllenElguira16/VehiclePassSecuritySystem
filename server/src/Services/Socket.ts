/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IO, Nsp, Socket, SocketService, SocketSession, Namespace } from '@tsed/socketio';
import SocketIO from 'socket.io';
import { $log } from '@tsed/common';

@SocketService()
export class MySocketService {
  @Namespace public nsp: Namespace | undefined;

  public newVehicle() {
    if (this.nsp) this.nsp.emit('newVehicle');
  }

  /**
   * Triggered the namespace is created
   */
  public $onNamespaceInit(nsp: SocketIO.Namespace) {
    console.log('');
  }

  /**
   * Triggered when a new client connects to the Namespace.
   */
  public $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    $log.debug('Connected');
  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  public $onDisconnect(@Socket socket: SocketIO.Socket) {
    console.log('');
  }
}
