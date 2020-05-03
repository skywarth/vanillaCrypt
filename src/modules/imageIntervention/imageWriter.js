export class imageWriter{
    static writeImage(imageData,targetElement,x,y){
        //imageData is regular array


        //var c = document.getElementById("myCanvas");

        var ctx = targetElement.getContext("2d");

        var imgData = ctx.createImageData(x, y);

        var i;
        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imageData[i];
            imgData.data[i+1] = imageData[i+1];
            imgData.data[i+2] = imageData[i+2];
            imgData.data[i+3] = 255;
        }

        return imgData;

    }
}