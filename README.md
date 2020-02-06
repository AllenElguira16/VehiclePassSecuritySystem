# Vehicle Pass Security System

Vehicle Pass Security System is a security system for lyceans

## How does it work?

**Vehicle Pass Security System** is a security system that needs verification to enter the campus. To enter the campus, just simply place the _vehicle pass card_ to the scanner. If verified, the boom barrier opens and can enter freely. if verification failed, the security personnel manually performs the verification.

## What is a Vehicle Pass Card?

Vehicle Pass is a Card that holds a secret key printed in a QR Code

## What Technology is Used?

- React/React-Native
  In web/mobile development, we used React/React-Native because it is scallable and backed by more community so we expected that there are many libraries to be integrated to the system
- Johnny-Five
  In hardware, we use johnny five to integrate the arduino hardware.
  Johnny Five is a Javascript/Typescript based arduino development
- Arduino Uno
  We used a arduino uno for the boom barrier
- Smartphone
  We used any kind of smartphone that can be use as a Scanner

## Installation

1. Before buying Arduino Micro-Controller check [here](http://johnny-five.io/platform-support/) to know what kind of board to be use.
2. Install Arduino IDE then upload StandardFirmataPlus to the Arduino Micro-Controller.
3. Install node-js.
4. Change the directory into the main directories (arduino, mobile, server and web) and install node modules by typing `npm install && npm start`.

Note that the system needs internet connection for the database to work

## License & Copyright

Under the GNU License, the code is free to use to the people.
