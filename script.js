let a11 = document.getElementById("a11") ;
let a12 = document.getElementById('a12') ;
let a13 = document.getElementById('a13') ;
let a21 = document.getElementById('a21') ;
let a22 = document.getElementById('a22') ;
let a23 = document.getElementById('a23') ;
let a31 = document.getElementById('a31') ;
let a32 = document.getElementById('a32') ;
let a33 = document.getElementById('a33') ;
let turn = document.getElementById('turn') ;
let submitBtn = document.getElementById('submitBtn') ;
let box = document.getElementsByClassName('box');
function startGame() {
    turn.textContent = `${document.getElementById('playerA').value} Turn`;
}
function boxDisable() {
    document.getElementById("playerA").disabled = true;
    document.getElementById("playerB").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    submitBtn.style.color = 'rgb(192, 192, 192)';
    submitBtn.style.pointerEvents = 'none';
}
let player = 'A';
function printXor0(tryBox) {
    player = next(player,tryBox);
}
function next(player,tryBox) {
    let playerA = document.getElementById('playerA').value ;
    let playerB = document.getElementById('playerB').value ;
    if (player == 'A') {
        tryBox.textContent = "X";
        if (winningStatus() == 0) {
            turn.textContent = `${playerB} Turn`;
            return 'B';
        }
    }
    if (player == 'B') {
        tryBox.textContent = "O";
        if (winningStatus() == 0) {
            turn.textContent = `${playerA} Turn`;
            return 'A';
        }
    }
}

function winningStatus() {
    let playerA = document.getElementById('playerA').value ;
    let playerB = document.getElementById('playerB').value ;
    if (((a11.textContent == 'X') && (a22.textContent == 'X') && (a33.textContent == 'X')) || ((a11.textContent == 'X') && (a12.textContent == 'X') && (a13.textContent == 'X')) || ((a11.textContent == 'X') && (a21.textContent == 'X') && (a31.textContent == 'X')) || ((a21.textContent == 'X') && (a22.textContent == 'X') && (a23.textContent == 'X')) || ((a31.textContent == 'X') && (a32.textContent == 'X') && (a33.textContent == 'X')) || ((a31.textContent == 'X') && (a22.textContent == 'X') && (a13.textContent == 'X')) || ((a12.textContent == 'X') && (a22.textContent == 'X') && (a32.textContent == 'X')) || ((a13.textContent == 'X') && (a23.textContent == 'X') && (a33.textContent == 'X'))) {
        turn.textContent = `${playerA} won`;
    } 
    else if (((a11.textContent == 'O') && (a22.textContent == 'O') && (a33.textContent == 'O')) || ((a11.textContent == 'O') && (a12.textContent == 'O') && (a13.textContent == 'O')) || ((a11.textContent == 'O') && (a21.textContent == 'O') && (a31.textContent == 'O')) || ((a21.textContent == 'O') && (a22.textContent == 'O') && (a23.textContent == 'O')) || ((a31.textContent == 'O') && (a32.textContent == 'O') && (a33.textContent == 'O')) || ((a31.textContent == 'O') && (a22.textContent == 'O') && (a13.textContent == 'O')) || ((a12.textContent == 'O') && (a22.textContent == 'O') && (a32.textContent == 'O')) || ((a13.textContent == 'O') && (a23.textContent == 'O') && (a33.textContent == 'O'))) {
        turn.textContent = `${playerB} won`;
    }
    else if(((a11.textContent== 'O') || (a11.textContent== 'X')) && ((a12.textContent== 'O') || (a12.textContent== 'X')) && ((a13.textContent== 'O') || (a13.textContent== 'X')) && ((a21.textContent== 'O') || (a21.textContent== 'X')) && ((a22.textContent== 'O') || (a22.textContent== 'X')) && ((a23.textContent== 'O') || (a23.textContent== 'X')) && ((a31.textContent== 'O') || (a31.textContent== 'X')) && ((a32.textContent== 'O') || (a32.textContent== 'X')) && ((a33.textContent== 'O') || (a33.textContent== 'X')) ) {
        turn.textContent = "Game Drawn";
    }
    else {
        return 0;
    }
}
function pDetails() {
    
}