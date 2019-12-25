import {
  Namespace,
  SocketService,
  Socket,
  SocketSession,
  Input,
  Args,
  Emit,
} from '@tsed/socketio'

@SocketService()
export class MySocketService {
  @Namespace nsp!: Namespace

  // helloAll() {
  //   this.nsp.emit('hi', 'everyone!')
  // }
  /**
   * Triggered the namespace is created
   */
  $onNamespaceInit(nsp: SocketIO.Namespace) {}

  /**
   * Triggered when a new client connects to the Namespace.
   */
  $onConnection(
    @Socket socket: SocketIO.Socket,
    @SocketSession session: SocketSession,
  ) {}

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  $onDisconnect(@Socket socket: SocketIO.Socket) {}

  public openBoomBarrier() {
    this.nsp.emit('open')
  }

  public warn() {
    this.nsp.emit('warn')
  }

  public askTimeout() {
    this.nsp.emit('askTimeout')
  }

  public timeout: number = 8000

  @Input('askTimeout')
  @Emit('getTimeout')
  public async getTimeout() {
    return this.timeout
  }
}
