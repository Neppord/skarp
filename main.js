var stdin = process.stdin;
var stdout = process.stdout;

var pen = {
  x: 0,
  y: 0,
  clear: function () {
    stdout.write('\u001B[2J\u001B[0;0f'); 
  },
  commit: function () {
    stdout.write("\u001B[" + this.y + ";" + this.x +"H");
  }
};

function main() {
  pen.clear();
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");

  stdin.on("data", function (key) {
    switch(key) {
      case 'j': pen.y +=1;break;
      case 'k': pen.y -=1;break;
      case 'l': pen.x +=1;break;
      case 'h': pen.x -=1;break;
      case '\u0003': process.exit(); break;
    }
    pen.commit();
  });
}

main();

