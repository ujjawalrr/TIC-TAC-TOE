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
function startGame() {
    turn.textContent = `${document.getElementById('playerA').value} Turn`;
    const start = new Audio('start.wav');
    start.play();
    start.loop =false;
    start.playbackRate = 2;
}
function boxDisable() {
    document.getElementById("playerA").disabled = true;
    document.getElementById("playerB").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    submitBtn.style.color = 'rgb(192, 192, 192)';
    submitBtn.style.pointerEvents = 'none';
    turn.textContent = "Click on Start Game";
}
let player = 'A';
function printXor0(tryBox) {
    player = next(player,tryBox);
}
function next(player,tryBox) {
    let playerA = document.getElementById('playerA').value ;
    let playerB = document.getElementById('playerB').value ;
    if (player == 'A') {
        if ((tryBox.textContent != "X") && (tryBox.textContent != "O")) {
            tryBox.textContent = "X";
            if (winningStatus() == 0) {
                turn.textContent = `${playerB} Turn`;
                return 'B';
            }
        }
        else {
            return 'A';
        }
    }
    
    if (player == 'B') {
        if ((tryBox.textContent != "X") && (tryBox.textContent != "O")) {
            tryBox.textContent = "O";
            if (winningStatus() == 0) {
                turn.textContent = `${playerA} Turn`;
                return 'A';
            }
        }
        else {
            return 'B';
        }
    }
}

function winningStatus() {
    let playerA = document.getElementById('playerA').value ;
    let playerB = document.getElementById('playerB').value ;
    const music = new Audio('win.wav');
    const draw = new Audio('draw.wav');
    if (((a11.textContent == 'X') && (a22.textContent == 'X') && (a33.textContent == 'X')) || ((a11.textContent == 'X') && (a12.textContent == 'X') && (a13.textContent == 'X')) || ((a11.textContent == 'X') && (a21.textContent == 'X') && (a31.textContent == 'X')) || ((a21.textContent == 'X') && (a22.textContent == 'X') && (a23.textContent == 'X')) || ((a31.textContent == 'X') && (a32.textContent == 'X') && (a33.textContent == 'X')) || ((a31.textContent == 'X') && (a22.textContent == 'X') && (a13.textContent == 'X')) || ((a12.textContent == 'X') && (a22.textContent == 'X') && (a32.textContent == 'X')) || ((a13.textContent == 'X') && (a23.textContent == 'X') && (a33.textContent == 'X'))) {
        turn.textContent = `${playerA} won`;
        music.play();
        music.loop =false;
    } 
    else if (((a11.textContent == 'O') && (a22.textContent == 'O') && (a33.textContent == 'O')) || ((a11.textContent == 'O') && (a12.textContent == 'O') && (a13.textContent == 'O')) || ((a11.textContent == 'O') && (a21.textContent == 'O') && (a31.textContent == 'O')) || ((a21.textContent == 'O') && (a22.textContent == 'O') && (a23.textContent == 'O')) || ((a31.textContent == 'O') && (a32.textContent == 'O') && (a33.textContent == 'O')) || ((a31.textContent == 'O') && (a22.textContent == 'O') && (a13.textContent == 'O')) || ((a12.textContent == 'O') && (a22.textContent == 'O') && (a32.textContent == 'O')) || ((a13.textContent == 'O') && (a23.textContent == 'O') && (a33.textContent == 'O'))) {
        turn.textContent = `${playerB} won`;
        music.play();
        music.loop =false;
    }
    else if(((a11.textContent== 'O') || (a11.textContent== 'X')) && ((a12.textContent== 'O') || (a12.textContent== 'X')) && ((a13.textContent== 'O') || (a13.textContent== 'X')) && ((a21.textContent== 'O') || (a21.textContent== 'X')) && ((a22.textContent== 'O') || (a22.textContent== 'X')) && ((a23.textContent== 'O') || (a23.textContent== 'X')) && ((a31.textContent== 'O') || (a31.textContent== 'X')) && ((a32.textContent== 'O') || (a32.textContent== 'X')) && ((a33.textContent== 'O') || (a33.textContent== 'X')) ) {
        turn.textContent = "Game Drawn";
        draw.play();
        draw.loop =false;
    }
    else {
        return 0;
    }
}