export class util{

static removeAlpha(arr){
    //for removing alpha layer data of image array
    let n=Array.prototype.slice.call(arr);



    n = n.filter(function(_, i) {
        return (i + 1) % 4;
        //hence alpha data is on every fourth element
    })
    return n;
}



static toOneDimension(arrToConvert){

    return [].concat(...arrToConvert);
}

    static xorArraysOLD(arr1,arr2){//CANCEL, doesn't work as intended
        return arr1.filter(x => !arr2.includes(x));
    }
    static xorArrays(arr1,arr2){
        for(let i=0;i<arr1.length;i++){
            arr1[i]=arr1[i]^arr2[i];
        }
        return arr1;
    }



    static chunkArray(myArray, chunk_size){
        let results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;
    }
}