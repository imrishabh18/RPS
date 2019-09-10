const game = ()=>{
    let pScore=0;
    let cScore=0;
    
    //starting the game
    const startgame =()=>{
        const playBtn=document.querySelector('.intro button');
        const introScreen=document.querySelector('.intro');
        const match=document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //playing the game
    const playgame=()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');
        //Removing the animation
        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation="";
            });
        });
        //Computer options
        const computerOptions=["rock","paper","scissors"];

        options.forEach(option =>{
            //Here we are using funct because to access the this keyword
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[computerNumber];
                
                setTimeout(()=>{
                    //Here is where we call comparehands
                    comparehands(this.textContent,computerChoice);
                    //Update Images
                    playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${computerChoice}.png`;
                },1000)
                
                //Animation
                playerHand.style.animation ='shakePlayer 1s ease';
                computerHand.style.animation ='shakeComputer 1s ease';
            });
        });
    };
    //Updating the score
    const updateScore=()=>{
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    };

    const comparehands=(playerChoice,computerChoice)=>{
        //Changing the text
        const winner=document.querySelector('.winners');
        if(playerChoice === computerChoice){
            winner.textContent="It's a Tie";
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent='Player Won';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Won';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent='Player Won';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Won';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent='Player Won';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Won';
                cScore++;
                updateScore();
                return;
            }
        }
    };
    startgame();
    playgame();
}
game();