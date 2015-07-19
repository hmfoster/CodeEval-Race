var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var input = line.split(',');
  var storage = {};
  for (var i = 0; i < input.length; i++) {
    storage[input[i]] = true;
  }
  var result = [];
  for (var key in storage){
    result.push(key);
  }
  return result.join(",");
}
