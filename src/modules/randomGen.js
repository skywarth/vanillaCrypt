export function getRandom(start,end) {
    //made it as a function so when the time comes, it could be replaced easily with a secure rand.
    //end exclusive, start inclusive
    return Math.floor((Math.random() * end) + start)

}