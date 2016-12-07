var marked = require('marked');
var fs = require('fs');
var _ = require('lodash');
var request = require('request');
let cheerio = require('cheerio');
let $ = cheerio.load('<ul><li></li></ul>');


// console.log(marked('I am using __markdown__!'));

// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log('this is the error: ', err.message);
//     return;
//   }
//   else {
//     // console.log(marked(buffer.toString()));
//     fs.writeFile(process.argv[3], marked(buffer.toString()), function(err, buffer) {
//       if (err) {
//         console.log('this is the error: ', err.message);
//         return;
//       }
//       else {
//         console.log('success');
//       }
//     });
//   }
// });

// var listeners = [
//   {'username': 'matt', 'listener': true, 'paired': false},
//   {'username': 'eli', 'listener': true, 'paired': false},
//   {'username': 'bob', 'listener': true, 'paired': false},
//   {'username': 'jeri', 'listener': true, 'paired': false},
// ];
//
// var speakers = [
//   {'username': 'autumn', 'listener': false, 'paired': true}
// ];
//
// var privateRoom = [];
// var pairedListeners = [];
//
// if (speakers) {
//   console.log('these are the speakers: ', speakers);
//   console.log('this is the first listener: ', listeners[0]);
//   listeners[0].paired = true;
//   // pairedListeners = pairedListeners.concat(_.dropWhile(listeners, ['paired', true]));
//   console.log(_.dropWhile(listeners, ['paired', true]));
//   console.log('this is the listeners: ', listeners);
//   console.log('this is the pairedListeners: ', pairedListeners);
// }
