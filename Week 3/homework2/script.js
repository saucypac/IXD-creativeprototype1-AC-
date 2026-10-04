let tileOne = document.getElementById("tileOne")
let tileTwo = document.getElementById("tileTwo")
let tileThree = document.getElementById("tileThree")
let tileFour = document.getElementById("tileFour")
let tileFive = document.getElementById("tileFive")
let tileSix = document.getElementById("tileSix")
let tileSeven = document.getElementById("tileSeven")
let tileEight = document.getElementById("tileEight")
let tileNine = document.getElementById("tileNine")

let message = document.getElementById("message")

let tileOneCorrect = false
let tileTwoCorrect = false
let tileThreeCorrect = false
let tileFourCorrect = false
let tileFiveCorrect = false
let tileSixCorrect = false
let tileSevenCorrect = false
let tileEightCorrect = false
let tileNineCorrect = false
//boolean if else checking 
let checkPuzzle = () => {

    if(
        tileOneCorrect == true &&
        tileTwoCorrect == true &&
        tileThreeCorrect == true &&
        tileFourCorrect == true &&
        tileFiveCorrect == true &&
        tileSixCorrect == true &&
        tileSevenCorrect == true &&
        tileEightCorrect == true &&
        tileNineCorrect == true
    ){
        message.innerHTML = "PUZZLE COMPLETED!!!"
    }

    else{
        message.innerHTML = ""
    }
}
//changing and checking each tile
let changeTileOne = () =>{

    if(tileOneCorrect == false){
        tileOne.src = "image/sto1 (1).png"
        tileOneCorrect = true
    }

    else{
        tileOne.src = "images/porsche1.png"
        tileOneCorrect=false
    }

    checkPuzzle()
}

let changeTileTwo = () =>{

    if(tileTwoCorrect == false){
        tileTwo.src = "image/sto1 (2).png"
        tileTwoCorrect = true
    }

    else{
        tileTwo.src = "images/porsche2.png"
        tileTwoCorrect=false
    }

    checkPuzzle()
}

let changeTileThree = () =>{

    if(tileThreeCorrect == false){
        tileThree.src = "image/sto1 (3).png"
        tileThreeCorrect = true
    }

    else{
        tileThree.src = "images/porsche3.png"
        tileThreeCorrect=false
    }

    checkPuzzle()
}

let changeTileFour = () =>{

    if(tileFourCorrect == false){
        tileFour.src = "image/sto1 (4).png"
        tileFourCorrect = true
    }

    else{
        tileFour.src = "images/porsche4.png"
        tileFourCorrect=false
    }

    checkPuzzle()
}

let changeTileFive = () =>{

    if(tileFiveCorrect == false){
        tileFive.src = "image/sto1 (5).png"
        tileFiveCorrect = true
    }

    else{
        tileFive.src = "images/porsche5.png"
        tileFiveCorrect=false
    }

    checkPuzzle()
}

let changeTileSix = () =>{

    if(tileSixCorrect == false){
        tileSix.src = "image/sto1 (6).png"
        tileSixCorrect = true
    }

    else{
        tileSix.src = "images/porsche6.png"
        tileSixCorrect=false
    }

    checkPuzzle()
}

let changeTileSeven = () =>{

    if(tileSevenCorrect == false){
        tileSeven.src = "image/sto1 (7).png"
        tileSevenCorrect = true
    }

    else{
        tileSeven.src = "images/porsche7.png"
        tileSevenCorrect=false
    }

    checkPuzzle()
}

let changeTileEight = () =>{

    if(tileEightCorrect == false){
        tileEight.src = "image/sto1 (8).png"
        tileEightCorrect = true
    }

    else{
        tileEight.src = "images/porsche8.png"
        tileEightCorrect = false
    }

    checkPuzzle()
}

let changeTileNine = () =>{

    if(tileNineCorrect == false){
        tileNine.src = "image/sto1 (9).png"
        tileNineCorrect = true
    }

    else{
        tileNine.src = "images/porsche9.png"
        tileNineCorrect = false
    }

    checkPuzzle()
}

tileOne.addEventListener("click", changeTileOne)
tileTwo.addEventListener("click", changeTileTwo)
tileThree.addEventListener("click", changeTileThree)
tileFour.addEventListener("click", changeTileFour)
tileFive.addEventListener("click", changeTileFive)
tileSix.addEventListener("click", changeTileSix)
tileSeven.addEventListener("click", changeTileSeven)
tileEight.addEventListener("click", changeTileEight)
tileNine.addEventListener("click", changeTileNine)