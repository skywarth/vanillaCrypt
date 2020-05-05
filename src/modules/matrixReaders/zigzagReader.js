//Wasn't done before on JS so i took the matter in my own hands
//All hand-written. Was damn tricky to deal with yo ! //Yigit Kursad Ersoy


export class tracker2{
    constructor() {
        this.x=0;
        this.y=0;
}
}


export function zigzagReader(arr) {

    let rows=arr.length;
    let cols=arr[0].length;
    let dimensionEquality=true;
    let dimensionDiff=0;
    let dimensionCounter=0;
    if(rows!==cols){
        dimensionEquality=false;
        dimensionDiff=Math.max(rows,cols)-Math.min(rows,cols);
    }
    let smallestDimension=Math.min(rows,cols);
    let maxDiag=rows+cols-1;

    let capture=[];

    capture.push(arr[0][0]);//first diagonal cleared
    let tracker=new tracker2();
    let diagSelector=1;

    let finishStat=true;//true For UP


    while(diagSelector<=maxDiag){
    diagSelector++;


    /*Dash to next diag*/
    if(finishStat){
        //Up diag finish
        if(tracker.x===0 && tracker.y===cols-1){
            //right-top corner
            tracker.x++;
        }
        else if(tracker.y===cols-1){
            //new
            tracker.x++;
        }
        else{
            tracker.y++;
        }


    }
    else{
        //Down diag finish
        if(tracker.y===0 && tracker.x===rows-1){
            //left-bottom corner
            tracker.y++;
        }
        else if(tracker.x===rows-1){
            //new
            tracker.y++;
        }
        else{
            tracker.x++;
        }

    }
        /*Dash to next diag*/





    /* Calc read amount */
    let readAmount;
    if(diagSelector<=smallestDimension){
        readAmount=diagSelector;
    }
    else
    {
        if(!dimensionEquality){
            if(dimensionCounter!==dimensionDiff){
            readAmount=smallestDimension;
            dimensionCounter++;
            }
            else{
                readAmount=2*smallestDimension-diagSelector+dimensionCounter;
            }
        }

        else{
            readAmount=2*smallestDimension-diagSelector;
        }

    }
    /* Calc read amount */
    if(finishStat){
            //reading to down
        for(let m=1;m<=readAmount;m++){
            //reading
            capture.push(arr[tracker.x][tracker.y]);
            tracker.x++;
            tracker.y--;
        }

            finishStat=false;


        tracker.x--;//recalibration
        tracker.y++;//recalibration
    }
    else{
        //reading to up
        for(let m=1;m<=readAmount;m++){
            //reading
            capture.push(arr[tracker.x][tracker.y]);
            tracker.x--;
            tracker.y++;
        }
        finishStat=true;
        tracker.x++;//recalibration
        tracker.y--;//recalibration
    }



    }
return capture;

}