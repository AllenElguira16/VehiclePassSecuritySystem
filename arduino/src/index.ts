import { Board, Servo, Led } from "johnny-five";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

let board = new Board();
board.on("ready", () => {
  let timeout: number;

  socket.emit("askTimeout");
  socket.on("getTimeout", (timeoutValue: number) => {
    console.log(timeoutValue);
    timeout = timeoutValue;
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
