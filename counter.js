
let scoreLabel = 0;
let plusButton = document.querySelector("plusBtn");
let minusButton = document.querySelector("minusBtn");
let resetButton = document.querySelector("resetBtn");
let scoreElement = document.querySelector("#scoreLabel");
// let scoreElement1 = document.querySelector("#scoreLabe1");

plusBtn.addEventListener('click', () => {
    scoreLabel++;
    scoreElement.textContent = scoreLabel;

});

minusBtn.addEventListener('click', () => {
    scoreLabel--;
    scoreElement.textContent = scoreLabel;

});

resetBtn.addEventListener('click', () => {
    scoreLabel = 0;
    scoreElement.textContent = scoreLabel;

});

// submitBtn.addEventListener('click', () => {
//     scoreLabel = 0;
//     scoreElement.textContent = scoreLabel;

// });

let scoreLabel1 = 0;
let plusButton1 = document.querySelector("plusBtn1");
let minusButton1 = document.querySelector("minusBtn1");
let scoreElement1 = document.querySelector("#scoreLabel1");


plusBtn1.addEventListener('click', () => {
    scoreLabel1++;
    scoreElement1.textContent = scoreLabel1;

});

minusBtn1.addEventListener('click', () => {
    scoreLabel1--;
    scoreElement1.textContent = scoreLabel1;

});

resetBtn.addEventListener('click', () => {
    scoreLabel1 = 0;
    scoreElement1.textContent = scoreLabel1;

});
let txt = document.getElementById('textbox');

submitBtn.addEventListener('click', () => {
    let score = scoreElement.innerHTML;
    let score1 = scoreElement1.innerHTML;
    txt.innerHTML = score;
    if (score > score1) {

        txt.innerHTML = 'Man Utd ' + score + ' - ' + score1 + ' Arsenal';
    }
    else if (score < score1) {
        txt.innerHTML = 'Man Utd' + score + '-' + score1 + 'Arsenal';
    }
    else if (score = score1) {
        txt.innerHTML = 'draw';
    }
    else {
        txt.innerHTML = 'draw'
    }

});
let deleteButton = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', () => {
    document.getElementById('textbox').innerHTML = '';
    deleteBtn = alert("Are you sure you want to delete?");
});
