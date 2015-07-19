var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var inputs = line.split("\n");
  var result = [];
  for (var i = 0; i < inputs.length; i++) {
    result.push(inputs[i].toLowerCase());
  }
  // Put your solution code here
  // Each line represents 1 test case provided by CodeEval
  return result.join(" ");
}
