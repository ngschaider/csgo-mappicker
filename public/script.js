var button;
var spinner;

function setup(){
    createCanvas(600, 600);

    button = new Button(width/2, height-100, 100, 20, "GIF MEE MAP!", function(){
        socket.emit("spin");
    });
}

function draw(){
    background(51);

    button.update();
    button.draw();

    if(spinner){
        spinner.update();
        spinner.draw();
    }
}
