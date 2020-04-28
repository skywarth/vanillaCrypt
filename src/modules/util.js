export class util{
static toOneDimension(arrToConvert){

    return [].concat(...arrToConvert);
}

    static xorArrays(arr1,arr2){
        return arr1.filter(x => !arr2.includes(x));
    }
}