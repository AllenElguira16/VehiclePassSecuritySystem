import { $log, ServerLoader } from "@tsed/common";
import { Server } from "./server";

async function bootstrap(): Promise<void> {
  try {
    $log.debug("Start server ...");
    const server = await ServerLoader.bootstrap(Server);
    await server.listen();
  } catch (error) {
    $log.error(error);
  }
}

bootstrap();
