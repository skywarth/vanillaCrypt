export class faker{
    constructor(x,y,colorStatus) {
        this.x = x;
        this.y=y;
        this.color=colorStatus;
        if(this.color==true){
            this.multiplier=3;
        }
        else{
            this.multiplier=1;
        }
    }


    calcLinearArraySize(){
        return this.x*this.y*this.multiplier;
    }

}
