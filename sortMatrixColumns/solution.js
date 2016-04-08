var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  //convert line to matrix
  var matrix = line.split('|');
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].trim().split(' ');
    for (var j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Number(matrix[i][j]);
    }
  }
  //switch rows and columns
  switched = trade(matrix);
  //sort by first val in column
  switched = switched.sort(function(a, b){
    var i = 0;
    while (a[i] === b[i] && i<a.length){
      i++;
    }
    return a[i] - b[i];
  });
  //switch back
  var back = trade(switched);
  //convert to pipe
  for (var k = 0; k < back.length; k++) {
    back[k] = back[k].join(' ');
  }
  return back.join(' | ');
}

function trade(matrix){
  var columns = [];
  for (var l = 0; l < matrix[0].length; l++) {
    var column = [];
    for (var k = 0; k < matrix.length; k++) {
      column.push(matrix[k][l]);
    }
    columns.push(column);
  }
  return columns;
}
