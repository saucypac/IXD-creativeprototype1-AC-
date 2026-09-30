let thisPage = document.getElementById("docBody")
let colorBtn = document.getElementById("colorChange")
let textBtn = document.getElementById("addText")
let toggleBtn = document.getElementById("toggleBtn")
let imgTT = document.getElementById("imageToToggle")

let changingColor = () => {
    // you can choose any random number
    let redC = Math.random() * 255
    let greenC = Math.random() * 255
    let blueC = Math.random() * 255
            
    thisPage.style.backgroundColor = "rgb(" + redC + ", " + greenC + ", " + blueC + ")"
}

let addingText = () => {
    let textReceptical = document.getElementById("textArea")

    let newElem = document.createElement("p")
    console.log(newElem)
    newElem.innerHTML = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."
            
    textReceptical.appendChild(newElem)
}

let togglingImage = (event) =>{
    console.log(event.target)

    if(event.target == imgTT){
        console.log("Clicked Image")
    }


    if(imgTT.alt == "First Mercedes Amg Gt Image"){
        imgTT.alt = "Second Image of Porsche"
        imgTT.src = "images/porsche.jpg"

    }

    else{
        imgTT.alt = "First Mercedes Amg Gt Image"
        imgTT.src = "images/merc.jpg"
    }

    //console.log(imgTT)
}

imgTT.addEventListener("click", togglingImage)
colorBtn.addEventListener("click", changingColor)
textBtn.addEventListener("click", addingText)
toggleBtn.addEventListener("click", togglingImage)