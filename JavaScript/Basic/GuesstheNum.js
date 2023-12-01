alert("Rules for this Game : 1] You  have to guess number between 1 to 50 2] You have only 5 chances 3] After guessing number we will  tell you, your guess number is  correct or not and greater or smaller ,4] your iniali score is 100 , you one wrong ans decrease 20 score . after correct your score display on screen .")

let randNum=Math.floor(Math.random()*50)+1;
let score=100;
let chances=5;
for (let i=1;i<=5;i++){

  let Gn=  prompt('Enter The Guess Number:');
    Gn=Number.parseInt(Gn);

    if (Gn==randNum){
        alert("You Win the Game :)");
        break;
    }

    else if (Gn < randNum){
        alert("you Guess small number,try agian");
        score-=20;
    }

    else if (Gn > randNum){
        alert('you Guess Big num, try again ! ')
         score-=20;
    }

  alert("you left chances : " + (chances-i)) ;


}

alert("Your Score : " + score)

alert('Thank you for playing , its made by hacker_adii team');