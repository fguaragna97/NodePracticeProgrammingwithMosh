// Event emitter is a class that contain methods
const EventEmitter = require("events");
//sending an http request to this url example
const url = "http://mylogger.io/log";

// we create a class that extends from event emitter then we can create methods and use this.emit to raise and event
class Logger extends EventEmitter {
  log(message) {
    //send an http request
    console.log(message);
    // we use this to raise an event , making a noise or signal Raised an event
    // we can send data by sending an object as the second argument in the emmiter
    //Raise an event
    this.emit("messageLogged", {
      id: 1,
      url: "http://",
    });
  }
}

// like this we can export outside the scope
//module.exports.log = log;

// we can change the name of the variable as well
// module.exports.endpoint = url;

// here we export the fucntion not an object
module.exports = Logger;
