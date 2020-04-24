class tracker{
    constructor() {
        this.x=0;
        this.y=0;
}
}


function zigzagReader(arr) {
    let dimensions = [ arr.length, arr[0].length ];

    let rows=arr.length-1;
    let cols=arr[0].length-1;

    let smallestDimension=Math.min(rows,cols);
    let maxDiag=rows+cols-1;

    let capture=[];
    for(let i=0;i<=rows*cols;i++){

    }


    let counter=0;
    capture.push(arr[0,0]);//first diagonal cleared
    let tracker=new tracker();
    let diagSelector=1;

    let finishStat=true;//true For UP
    while(diagSelector<=maxDiag){
    diagSelector++;
    let diagCounter=Math.max(tracker.x,tracker.y);
    //dash to the diag
    /*if(tracker.x=0,tracker.y=0){
        tracker.y++;
    }*/
    if(finishStat){
        tracker.y++;
    }





    /* Calc read amount */
    let readAmount;
    if(diagSelector<=smallestDimension){
        readAmount=diagSelector;
    }
    else
    {
     readAmount=smallestDimension-diagSelector;
    }
    /* Calc read amount */


    for(let m=0;m<=readAmount;m++){
    //reading
        if(finishStat){
            //reading to down

        }
    }

    }


}