import {ultraMegaFusionRandom} from "./chaoticRandom/ultraMegaFusionRandom.js";

export class CKG{
    //kinda like a singleton
    static latestInstance;
    //idea behind it: using single random instance (with defined seed) that will be used on the whole application
    //so that all of the random number generations will be somewhat connected to each other, and encryption results will be the same every time
constructor(seed,spice) {
    this._seed=seed;
    this._rndObj=new ultraMegaFusionRandom(this._seed,spice);
    CKG.latestInstance=this;
    }



getRandom(start,end) {
    //made it as a function so when the time comes, it could be replaced easily with a secure rand.
    //end inclusive, start inclusive


    //OLD
    //return Math.floor(Math.random() * (end - start) ) + start;
    //OLD

    //NEW CKG/PRNG
    return this._rndObj.getNextRange(start,end+1);//end+1 to make it inclusive
    //NEW CKG/PRNG
}

}