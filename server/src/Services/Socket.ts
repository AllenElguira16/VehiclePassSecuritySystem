import { SocketService, Namespace } from '@tsed/socketio';
import { $log } from '@tsed/common';

@SocketService()
export class MySocketService {
  @Namespace public nsp: Namespace | undefined;

  public newVehicle(): void {
    if (this.nsp) this.nsp.emit('newVehicle');
  }

  /**
   * Triggered the namespace is created
   */
  public $onNamespaceInit(): void {
    console.log('');
  }

  /**
   * Triggered when a new client connects to the Namespace.
   */
  public $onConnection(): void {
    $log.debug('Connected');
  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  public $onDisconnect(): void {
    console.log('');
  }
}
