const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
   var workerProcess = child_process.exec('node test.js ' + i, function
      (error, stdout, stderr) {

      if (error) {
         console.log(error.stack); //display full error stack
         console.log('Error code: ' + error.code); //provide error code
         console.log('Signal received: ' + error.signal); //indicate signal which caused process to terminate eg SIGTERM
      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
   });

   workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code ' + code);
   });
}