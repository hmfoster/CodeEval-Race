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
  var result = [];
  for (var i = 0; i <100; i++) {
    if(i%2){
     result.push(i);
   }
 }
  return result.join("\n");
}
