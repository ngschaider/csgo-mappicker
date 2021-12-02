var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static('public'));

http.listen(27015, function(){
  console.log('Server listening on *:27015');
});

var imgVorg = [
    {"name": "Dust 2", "url": "img/dust2.png"},
    {"name": "Dust", "url": "img/dust.png"},
    {"name": "Nuke", "url": "img/nuke.png"},
    {"name": "Cache", "url": "img/cache.png"},
    {"name": "Mirage", "url": "img/mirage.png"},
    {"name": "Inferno", "url": "img/inferno.png"},
];
imgVorg  = shuffle(imgVorg);

var isSpinning = false;

io.on('connection', function(socket){
  socket.emit("setupMaps", imgVorg);

  socket.on("spin", function(){
      isSpinning = true;
      io.sockets.emit("startSpinning");
      console.log("Start Spinning!!!");
  });
});

function shuffle(arr) {
    arr = ArrayBuffer.isView(arr) ? arr : arr.slice();

    for (var rnd, tmp, idx = arr.length; idx > 1;
    rnd = Math.random()*idx | 0,
    tmp = arr[--idx], arr[idx] = arr[rnd], arr[rnd] = tmp);

    return arr;
};
