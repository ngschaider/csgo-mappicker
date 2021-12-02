function Spinner(x, y, w, h, imgVorg){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.imgVorg = imgVorg;

    this.isSpinning = false;
    this.spinSpeed = 40;
    this.spinningSince = 0;

    this.images = [];
    for(var i=0;i<this.imgVorg.length;i++){
        this.images.push(new SpinnerImage(this.imgVorg[i].name, this.imgVorg[i].url, this.images.length));
    }


    this.update = function(){
        if(!this.isSpinning) return;

        this.spinningSince++;
        if(this.spinningSince > 100){
            if(this.spinSpeed > 4){
                this.spinSpeed *= 0.992;
            } else {
                this.spinSpeed -= 0.03;
                if(this.spinSpeed < 0){
                    this.spinSpeed = 0;
                }
            }
        }

        for(var i=0;i<this.images.length;i++){
            this.images[i].update(this);
        }
    }
    this.draw = function(){
        fill(255);
        noStroke(255);
        rect(this.x-this.w/2, this.y, this.w, this.h);

        for(var i=0;i<this.images.length;i++){
            this.images[i].draw(this.x-this.w/2, this.y, this.w, this.h);
        }

        stroke(255, 0, 0);
        fill(255, 0, 0);
        line(this.x, this.y, this.x, this.y+this.h);

        stroke(51);
        fill(51);
        rect(0, this.y, this.x-this.w/2, this.h) // left visible cover
        rect(this.x+this.w/2, this.y, width-this.x+this.w, this.h) // right visible cover
    }

    this.spin = function(){
        this.isSpinning = true;
    }
}
