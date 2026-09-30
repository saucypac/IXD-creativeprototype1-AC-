let imageOne = document.getElementById("imageOne")
let imageTwo = document.getElementById("imageOne")
let imageThree = document.getElementById("imageOne")
let imageFour = document.getElementById("imageOne")

let changingImage = (event) => {
    console.log(event.target)

    if(event.target == imageOne){
        largeImage.src = "images/sto.webp";
        largeImage.alt = "lamborghini";
    }
    if(event.target == imageTwo){
        largeImage.src = "images/merc.jpg";
        largeImage.alt = "mercedes";
    }
    if(event.target == imageThree){
        largeImage.src = "images/720s.webp";
        largeImage.alt = "mclaren";
    }
    if(event.target == imageFour){
        largeImage.src = "images/porsche.jpg";
        largeImage.alt = "porsche";
    }
}

imageOne.addEventListener("click", changingImage)
imageTwo.addEventListener("click", changingImage)
imageThree.addEventListener("click", changingImage)
imageFour.addEventListener("click", changingImage)