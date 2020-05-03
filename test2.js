import {imageReader} from "./src/modules/imageIntervention/imageReader.js";
import {util} from "./src/modules/util.js";
import {imageWriter} from "./src/modules/imageIntervention/imageWriter.js";


let k=imageReader.imageToMatrix(document.getElementById('im')).data;

let n=util.removeAlpha(k);




n=util.fillAlpha(n);
var c = document.getElementById("myCanvas");
let q=imageWriter.writeImage(n,c,102,102);
c.getContext("2d").putImageData(q,0,0);


console.log(n);