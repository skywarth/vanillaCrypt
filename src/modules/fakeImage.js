import {CKG} from "./randomGen.js";

export class faker{
    constructor(x,y,colorStatus) {
        this.x = x;
        this.y=y;
        this.color=colorStatus;
        this.fakeImage=this.generateFakeImage();
        if(this.color){
            this.multiplier=3;
        }
        else{
            this.multiplier=1;
        }
    }

    generateFakeImage(){
        let fakeImage=[];
        for(let i=0;i<this.x;i++){
            fakeImage[i]=[];
            for(let k=0;k<this.y;k++){
            fakeImage[i][k]= CKG.latestInstance.getRandom(0,255);
            }
        }
        return fakeImage;
    }


    calcLinearArraySize(){
        return this.x*this.y*this.multiplier;
    }

    createArray(){
       // return new array
    }

}
