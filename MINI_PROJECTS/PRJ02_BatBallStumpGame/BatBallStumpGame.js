let ComputerChoiceToken = 1;
let ComputerChoiceGame = -1;
let UserChoiceGame = '';
let Result = '';

let ScoreBoard;
let ScoreStr = localStorage.getItem("GameResultLocalStorage");


if(ScoreStr!=undefined){
    ScoreBoard = JSON.parse(ScoreStr);
}else{
    ScoreBoard = {
    UserWin: 0,
    ComputerWin: 0,
    Tie: 0,
};
}

//adding a new key:value pair after obj is defined ! 
ScoreBoard.displayScore = function() {
        return `
        User = ${this.UserWin}
        <br>
        Computer = ${this.ComputerWin}
        <br>
        Tie = ${this.Tie}
        `;
    }

let GameResultLocalStorage ;

function ComputerChoice(){
    ComputerChoiceToken = Math.random()*3;
    // console.log('Computer Choice Token : '+ComputerChoiceToken);
    ComputerGameChoice();
    
}

function ComputerGameChoice(){
    if(ComputerChoiceToken>0 && ComputerChoiceToken<=1){
        ComputerChoiceGame = 'Bat';
    }else if(ComputerChoiceToken>1 && ComputerChoiceToken<=2){
        ComputerChoiceGame = 'Ball' ;
    }else if(ComputerChoiceToken>2 && ComputerChoiceToken<=3){
        ComputerChoiceGame = 'Stump' ;
    }

    console.log('Computer Game Choice : '+ComputerChoiceGame);
}

function PlayGame(){
    if(UserChoiceGame=='Bat' && ComputerChoiceGame=='Ball' || UserChoiceGame=='Ball' && ComputerChoiceGame=='Stump' ||  UserChoiceGame=='Stump' && ComputerChoiceGame == 'Bat'){
        Result='User Wins !!';
        ScoreBoard.UserWin++;
    }else if(UserChoiceGame == ComputerChoiceGame){
        Result='It \'s a TIE !!' ;
        ScoreBoard.Tie++;
    }else{
        Result='Computer Wins !!';
        ScoreBoard.ComputerWin++;
    }

    SaveGameResultLocalStorage();

    console.log(Result);

    alert(Result);

    document.querySelector('.Score').innerHTML=ScoreBoard.displayScore();

}

function SaveGameResultLocalStorage(){

    GameResultLocalStorage = JSON.stringify(ScoreBoard);

    localStorage.setItem("GameResultLocalStorage" , GameResultLocalStorage);


}

function ClearSavedResults(){
    localStorage.removeItem("GameResultLocalStorage");
    window.location.reload();
}
