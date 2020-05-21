function Random(seed) {
    this._seed = seed % 1103515245;//2147483647
    if (this._seed <= 0) this._seed += 12345;//2147483646
}

/**
 * Returns a pseudo-random value between 1 and 2^32 - 2.
 */
Random.prototype.next = function () {
    this._seed = this._seed * 16807 % 2147483647 * 0.1;
    const len = Math.ceil(Math.log10(this._seed + 1));
    this._seed=this._seed/Math.pow(10,len);
    return this._seed

    ;
};