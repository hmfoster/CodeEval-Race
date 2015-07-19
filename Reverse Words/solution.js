var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
  var lines = line.split("\n");
  var singleLine = []
  for (var i = 0; i < lines.length; i++) {
    singleLine.push(lines[i].split(" ").reverse().join(" "));
  }
  return singleLine.join(" ");
}
