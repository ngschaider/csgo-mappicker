function SpinnerImage(name, pathToImg, position){
    this.name = name;
    this.w = 100;
    this.h = 100;
    this.x = position*100;
    this.y = 0;
    this.img = loadImage(pathToImg);

    this.update = function(par){
        this.x -= par.spinSpeed;

        if(this.x+par.x+this.w < par.x){
            this.x += par.images.length*100;
        }
    }

    this.draw = function(parX, parY, parW, parH){
        image(this.img, this.x+parX, this.y+parY, this.w, this.h);
        stroke(51);
        line(this.x+parX, this.y+parY, this.x+parX, this.y+parY+this.h);

        textAlign(CENTER);
        stroke(255);
        fill(255);
        text(this.name, this.x+parX, this.y+parY+this.h-20, this.w, this.h);
    }
}
