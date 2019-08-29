import { Controller, Get } from "@tsed/common";
// import { Board, Led } from "johnny-five"
// let board = new Board()

@Controller("/arduino")
class ArduinoController {
  @Get("/open-light")
  public openLight() {
    // board.on("ready", () => {
    // const led = new Led(9)
    // led.toggle()
    // setTimeout(() => {
    //   led.toggle()
    // }, 2000)
    // })
    return "success!";
  }
}

export default ArduinoController;
