export class util{
static toOneDimension(arrToConvert){

    return [].concat(...arrToConvert);
}

    static xorArrays(arr1,arr2){
        return arr1.filter(x => !arr2.includes(x));
    }


    static chunkArray(myArray, chunk_size){
        let results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;
    }
}