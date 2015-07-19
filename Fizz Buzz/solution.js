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
  var fizzBuzz = function(a,b,c){
    var results = [];
    for (var i = 1; i <= c; i++) {
      if (i%a===0 && i%b===0){
        results.push("FB");
      } else if (i%a===0){
        results.push("F");
      } else if (i%b===0){
        results.push("B");
      } else{
        results.push(i);
      } 
    } return results;
  };
  var args = line.split(" ");
  return fizzBuzz.apply(null, args).join(" ");
}
