var imageContainer = document.getElementById('imageContainer');
var images = ['1.jpg','2.jpg','3.jpg'];
var totalImages = images.length;
var currentImage = 0;

function changeImages(){
    var imageSource = "images/" + images[currentImage];
    currentImage = currentImage + 1 == totalImages ? 0 : currentImage + 1;
    imageContainer.innerHTML =  '<img src="' + imageSource + '" />';
    
    setTimeout(changeImages, 3000);
}

changeImages();
