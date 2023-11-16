console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn + ": ";
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn + ": ";
    var r = document.querySelector(':root');
    r.style.setProperty('--dark', 'rgb(152, 2, 147)');
    r.style.setProperty('--light', 'rgb(251, 127, 255)');
    
})


function myBlue() {
    var r = document.querySelector(':root');
    r.style.setProperty('--light', '#66d9ff');
    r.style.setProperty('--dark', '#0066cc');
}
function myGreen() {
    var r = document.querySelector(':root');
    r.style.setProperty('--light', '#80ff00');
    r.style.setProperty('--dark', ' #4d9900');
}
function myGold() {
    var r = document.querySelector(':root');
    r.style.setProperty('--light', '#ffe866');
    r.style.setProperty('--dark', '#B19600');
}