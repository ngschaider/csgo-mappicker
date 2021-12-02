function Button(x, y, w, h, msg, onClick){
    this.w = w;
    this.h = h;
    this.x = x-w/2;
    this.y = y;
    this.msg = msg;
    this.onClick = onClick;

    this.hovered = false;
    this.pressed = false;

    this.update = function(){
        this.hovered = mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h;

        var wasPressed = this.pressed;
        this.pressed = this.hovered && mouseIsPressed;

        if(this.pressed && !wasPressed){
            this.onClick();
        }
    }
    this.draw = function(){
        stroke(255, 255, 0);
        if(this.pressed){
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        rect(this.x, this.y, this.w, this.h);


        fill(255, 0, 0);
        stroke(255, 0, 0);
        textAlign(CENTER);
        text(this.msg, this.x+this.w/2, this.y+this.h-5);
    }
}
