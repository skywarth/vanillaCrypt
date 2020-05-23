import {CKG} from "./randomGen.js";

export class initVector{

constructor(valueAmount,rangeStart,rangeEnd) {
    //STEP 5
    let tempArr=[];
    for(let i=0;i<valueAmount;i++){
    tempArr.push(CKG.latestInstance.getRandom(rangeStart,rangeEnd));
    }
    this.vectorInstance=tempArr;
    initVector.lastIV=tempArr;
    //initVector._last=tempArr;
    }


    static get lastIV(){
    //accessor GET
    return _lastIV;
    }

    static set lastIV(val){
        //accessor GET
        _lastIV=val;
    }



}

let _lastIV=[];//basically a static var for the class (because static props are not widely supported yet)