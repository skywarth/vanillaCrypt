import {imageReader} from "./src/modules/imageReader.js";
import {util} from "./src/modules/util.js";

let k=imageReader.imageToMatrix(document.getElementById('im')).data;

let n=util.removeAlpha(k);
console.log(n);