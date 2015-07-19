var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var lines = line.split("\n");
  var singleLine = [];
  result = [];
  for (var i = 0; i < lines.length; i++) {
    singleLine.push(lines[i].split(" "));
  }
  var sum;
  for (var j = 0; j < singleLine.length; j++) {
    result.push(String(singleLine[j]).split("").reduce(function(a, b){
      return Number(a)+Number(b);
    })
    );
  }
  return result.join(" ");
}
