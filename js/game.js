let blockItem = document.getElementsByClassName("blockItem");
let blockContainer = document.getElementById("blockContainer");
let currentStep = document.getElementById("currentStep");
let winBlock = document.getElementById("winBlock");
let winPlayer = document.getElementById("winPlayer");
let againPlayBtn = document.getElementById("againPlayBtn");
let step = true;
let blockInner = "x";
let counter = 0;
let winner = "";
let winData = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


currentStep.innerHTML = "Крестик";

function whoStepCheck() {
    if (step === true) {
        blockInner = "x";
        console.log(blockInner);
        currentStep.innerText = "Крестик";
    } else if (step === false){
        blockInner = "o";
        currentStep.innerText = "Нолик";
        console.log(blockInner);
    }
}


for (let i = 0; i < 9; i++) {
    blockItem[i].addEventListener("click", () => {
        blockItem[i].innerHTML = blockInner;
        step = !step;
        whoStepCheck()
        blockItem[i].classList.add('noClick');
        if (step === true) {
            blockItem[i].classList.add("o");
        } else {
            blockItem[i].classList.add("x")
        }
        counter++
        winX()
        winCircle()
        draw()
    });
}

for (let i = 0; i > winData.length; i++) {
        if (blockItem[winData[i][0]].classList.contains('x')) {
            console.log("test")
        } else {
            console.log("Error")
        }
        
    } 

function winX() {
    for (let i = 0; i < winData.length; i++){
        if (
            blockItem[winData[i][0]].classList.contains('x') &&
            blockItem[winData[i][1]].classList.contains('x') &&
            blockItem[winData[i][2]].classList.contains('x')
        ) {
            console.log("Победил крестик")
            winBlock.classList.add('visible');
            winPlayer.innerHTML = "Победил крестик";
            blockContainer.classList.add('noClick');
            return 1
        }
    }
}

function winCircle() {
    for (let i = 0; i < winData.length; i++){
        if (
            blockItem[winData[i][0]].classList.contains('o') &&
            blockItem[winData[i][1]].classList.contains('o') &&
            blockItem[winData[i][2]].classList.contains('o')
        ) {
            console.log("Победил нолик")
            winBlock.classList.add('visible');
            winPlayer.innerHTML = "Победил нолик";
            blockContainer.classList.add('noClick');
            return 1
        }
    }
}

function draw () {
    if (!winX() && !winCircle() && (counter >= 9)) {
         console.log("Ничья")
        winBlock.classList.add('visible')
        winPlayer.innerHTML = "Ничья";
        blockContainer.classList.add('noClick');
        }
}











