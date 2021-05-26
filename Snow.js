class Snow {
    constructor(){
        this.smokeImage = loadImage("snow5.webp");
        this.trajectory = [];
    }

    display() {

        if (frameCount % 60 ===0){
            var position = Math.round(random(800,400),50,50);
            this.trajectory.push(position)
        }

        for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
}