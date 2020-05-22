export class ultraMegaFusionRandom{
constructor(seed,spicy) {

    //spicy:false is standard GCC
    //spicy:true is spicy... hence the name. Basically modified version of GCC in order to increase entropy

    this._spice=spicy;

    this._seed=seed;
    //constants according to glibc GCC
    this._modulus=2147483648; //2^31
    this._mulA=1103515245;
    this._incC=12345;
    this._current=seed;
    //spices to modify. Hopefully increase entropy and chaos
    this._poison1=Math.PI;
    this._poison2=Math.E;

    //preparing the pool
    //initial val
    //this._current=this._current*

    if(this._spice){
        this._current*=this._mulA;
        this._current=this._current%this._modulus;
    }
    else{
        this._current=this._current%this._modulus;

    }

}

    static get seed(){
        return this._seed;
    }

    static set seed(val){
        this._seed=val;
    }

    truncate(number){
        const len = Math.ceil(Math.log10(number + 1));
        number=number/Math.pow(10,len);
        return number;
    }
    _getNext(){//without truncate
        if(this._spice){
            //Ramanujan's Constant
            let mixture=Math.pow(Math.pow(this._poison2,this._poison1),Math.sqrt(163));//Ramanujan's Constant calculation, really spicy !
            mixture=mixture^this._poison1;//XOR mixture with PI

            this._current=Math.abs(this._current^mixture);//XOR the current seed with mixture

        }

        this._current = this._current * this._mulA;
        this._current+=this._incC;
        this._current =this._current %this._modulus;
        return this._current;
    }
    getNext(){

        return this.truncate(this._getNext());

    }

    getNextRangeOLD(start,end){ //min (inclusive) and max (exclusive)
        /*let rangeSize = end - start;
        let randomUnder1 = this.getNext();
        return start + Math.floor(randomUnder1 * rangeSize);*/
        return Math.floor(this.getNext()*(end-start)+start)

    }

    getNextRange(start,end){ // start inclusive, end exclusive
        var rangeSize = end - start;
        var randomUnder1 = this._getNext() / this._modulus;
        return start + Math.floor(randomUnder1 * rangeSize);

    }



/*function Random(seed) {
    this._seed = seed % 1103515245;//2147483647
    if (this._seed <= 0) this._seed += 12345;//2147483646
}*/

/**
 * Returns a pseudo-random value between 1 and 2^32 - 2.
 */
/*Random.prototype.next = function () {
    this._seed = this._seed * 16807 % 2147483647 * 0.1;
    const len = Math.ceil(Math.log10(this._seed + 1));
    this._seed=this._seed/Math.pow(10,len);
    return this._seed;


};*/
}
