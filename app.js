// // a module that nodes come with it
// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// // here is how we import/ load something in a node app
// const log = require("./logger");

// log("HELLOOOO");

// const os = require("os");

// var totalMemory = os.totalmem;
// var freeMemory = os.freemem;

// console.log(
//   `The Total memory is ${totalMemory} and the Free memory is ${freeMemory}`
// );

// here is how to work with files in node
// const fs = require("fs");

// // const files = fs.readdirSync("./");
// // console.log(files);

// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

// // Event emitter is a class that contain methods
// const EventEmitter = require("events");

// // // here we need to create an instant of the class and this emitter is an object
// // const emitter = new EventEmitter();

// const Logger = require("./logger");
// const logger = new Logger();

// //Register a listener for the event , first argument is named of the event we need to register the listener first
// // we can recieved data by getting the arg of what the emmiter send in the object
// logger.on("messageLogged", (arg) => {
//   console.log("listener called", arg);
// });

// // emitter.emit("logging", {
// //   data: "Message",
// // });

// logger.log("message");

const http = require("http");

// here we created a new server in which we have acess to requriments and response
const server = http.createServer((req, res) => {
  // here is the req.url is the same as / we get the response
  if (req.url === "/") {
    res.write(`Hellow World`);
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3001);

console.log(`listening on port 3001...`);
