/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores_1 ,scores_2,roundScore, activePlayer,dice,diceDom,panel_0, panel_1,score_0,score_1,current_0,current_1,gamePlaying, previous,next;
gamePlaying = true;

var finalscore ;
var winningscore;



panel_0 = document.querySelector('.player-0-panel').classList;
panel_1 = document.querySelector('.player-1-panel').classList;
score_0 = document.getElementById('score-0').textContent; 
score_1 = document.getElementById('score-1').textContent ;
	
init();


document.querySelector('.btn-roll').addEventListener('click',roll);

document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click',init);

	


function init()
{
	
	var P1=document.querySelector('#name-0').textContent = prompt("PLAYER 1 NAME");
	var P2=document.querySelector('#name-1').textContent = prompt("PLAYER 2 NAME");
	document.querySelector('.dice').style.display = 'none';
	scores_1= 0;
 	scores_2 = 0;
	roundScore = 0;
	activePlayer = 0;
	score_reset()
	current_reset();
	document.querySelector('.dice').style.display = 'none';
	
	panel_0.remove('winner');
	panel_1.remove('winner');
	panel_0.add('active');
	gamePlaying = true;
};



	


function roll()
{
	if(gamePlaying){
	dice = Math.floor(Math.random() * 6) + 1;
	diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
		roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}


	if( dice === 6 && previous === 6)
		{
			if(activePlayer === 0  ){
				if(scores_1 >= 30){
				scores_1 = scores_1 - 30;
					document.getElementById('score-0').textContent = scores_1;
				}
				else{
					scores_1= 0;
					document.getElementById('score-0').textContent = '0';
				}
				
				
				activePlayer = 1;
				roundScore = 0;
			current_reset();
			panel_0.toggle('active');
			panel_1.toggle('active');
			}
			else if(activePlayer === 1)
				{
					if(scores_2 < 30){
				scores_2 = 0;
						document.getElementById('score-1').textContent = '0';
				}
				else{
					scores_2= scores_2 - 30;
					document.getElementById('score-1').textContent = scores_2;
				}
					
				
				activePlayer = 0;
				roundScore = 0;
			current_reset();
			panel_0.toggle('active');
			panel_1.toggle('active');
			}
				}
				
			
			
	else if(dice === 1)	
		{
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;
			current_reset();
			panel_0.toggle('active');
			panel_1.toggle('active');
			
		}
		previous = dice;
};
	
	
		

	
function hold()
{
	if(activePlayer === 0)
		{
			scores_1 = scores_1 + roundScore;
			document.querySelector('#score-' + activePlayer).textContent = scores_1;
			roundScore = 0;
			document.getElementById('current-' + activePlayer).textContent = '0';
			activePlayer = 1;
			panel_0.toggle('active');
			panel_1.toggle('active');
			
		}
	else
		{
			scores_2 = scores_2 + roundScore;
			document.querySelector('#score-' + activePlayer).textContent = scores_2;
			roundScore = 0;
			document.getElementById('current-' + activePlayer).textContent = '0';
			activePlayer = 0;
			panel_0.toggle('active');
			panel_1.toggle('active');
	
		}
	finalscore = document.querySelector('.final_score').value;

	
	if(finalscore){
	 winningscore = finalscore;
	}
	else{
	winningscore = 100;
	}
	if(scores_1 >= winningscore)
		{
			document.querySelector('#name-0').textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			panel_0.add('winner');
			panel_0.remove('active');
			panel_1.remove('active');
			gamePlaying = false;
		}
	else if(scores_2 >= winningscore)
		{
			document.querySelector('#name-1').textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			panel_1.add('winner');
			panel_1.remove('active');
			panel_0.remove('active');
			gamePlaying = false;
			
		}
};

function current_reset()
	{
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
	};

function score_reset()
	{
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
	};

function one()
	{
		document.querySelector('.dice').style.display = 'none';
	};