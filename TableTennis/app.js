const player1Point = document.querySelector('#player1-point');
const player2Point = document.querySelector('#player2-point');
const select = document.querySelector('#select');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');

let player1Counter = 0;
player1.addEventListener('click', function () {
    player1Point.innerText = `${++player1Counter}`;
    colorChange();
})

let player2Counter = 0;
player2.addEventListener('click', function () {
    player2Point.innerText = `${++player2Counter}`;
    colorChange();
})

reset.addEventListener('click', function () {
    player1Point.style.color = 'black';
    player2Point.style.color = 'black';
    player1Counter = 0;
    player2Counter = 0;
    player1Point.innerText = '0';
    player2Point.innerText = '0';
    player1.disabled = false;
    player2.disabled = false;
})

function colorChange() {
    if (parseInt(select.value) === player1Counter) {
        player1Point.style.color = 'green';
        player2Point.style.color = 'red';
        player1.disabled = true;
        player2.disabled = true;
    } else if (parseInt(select.value) === player2Counter) {
        player1Point.style.color = 'red';
        player2Point.style.color = 'green';
        player1.disabled = true;
        player2.disabled = true;
    }
}
