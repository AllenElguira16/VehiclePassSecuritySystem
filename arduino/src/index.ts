import { Board, Servo, Led } from "johnny-five";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

let board = new Board();
board.on("ready", () => {
  const timeout = 8000;

  socket.on("askTimeout", () => {
    socket.emit("timeout", timeout);
  });

  socket.on("open", () => {
    const led = new Led(13);
    led.on();
    setTimeout(() => led.off(), timeout);
    const servo = new Servo({
      pin: 11,
      startAt: 90
    });
    setTimeout(() => servo.to(0), timeout); // Pull up
    servo.home(); // Pull down
  });

  socket.on("warn", () => {
    const led = new Led(12);
    led.on();
    setTimeout(() => led.off(), timeout);
  });
});
