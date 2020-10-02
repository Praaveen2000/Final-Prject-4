const buttons= document.querySelectorAll('.pick');
const scoreEl = document.getElementById('points');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset')
const userSelect = document.getElementById('user_select');
const computerSelect = document.getElementById('computer_select');
const winner = document.getElementById('win');

//rules button
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const rules = document.getElementById('rules');

const choices = ['paper','rock','scissors'];

let userChoice = undefined;
let score=0;

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
            userChoice = button.getAttribute('data-choice');
           
            checkWinner();
    });
});

//rules section
openBtn.addEventListener('click',()=>{
    rules.style.display = 'flex';
})

closeBtn.addEventListener('click',()=>{
    rules.style.display = 'none';
})


reset.addEventListener('click',()=>{
    main.style.display = 'flex';
    selection.style.display = 'none';
});

function checkWinner(){

    const computerChoice = pickRandomChoice();
    
    // //update
    updateSelection(userSelect,userChoice);
    updateSelection(computerSelect,computerChoice);

    if(userChoice === computerChoice){
        //draw
        updateScore(0);
        winner.innerText = 'draw';
    }
    else if(userChoice=== 'paper' && computerChoice=== 'rock' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice=== 'rock' && computerChoice === 'scissors')
    {
        //Win
         updateScore(1);
         winner.innerText = 'win';
    }
    else{
        updateScore(-1);
         winner.innerText = 'lose';
    }
    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore(value){
        score+=  value;
        scoreEl.innerText = score;
}
function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];

}

function updateSelection(selectionEl,choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');


    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `icon-${choice}.svg`;
    img.alt = choice;
}

