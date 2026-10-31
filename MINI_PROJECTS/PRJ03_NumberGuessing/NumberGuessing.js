
let ComputerToken;
let UserToken;
let ScoreBoard = {
    Match : 0,
    Unmatched : 0,
};
let Status ='' ;


function ComputerChoose(){
    ComputerToken = Math.floor((Math.random())*10);
    console.log(ComputerToken);
    PlayGame();
}

function PlayGame(){
    if(ComputerToken==UserToken){
        Status = "Matched !";
        console.log("It's a Match !");
        alert("It's a Match !");
        ScoreBoard.Match++;
    }else{
        Status = "Not Matched !";
        console.log("Ooops .. Unmatched !");
        ScoreBoard.Unmatched++;
    }
    displayScore();
}

function displayScore(){
    document.querySelector('.score').innerHTML=
    `
        MATCHED : ${ScoreBoard.Match} 
        <br> <br>
        UNMATCHED : ${ScoreBoard.Unmatched}
    `;
    Displayer();
}

function Displayer(){
    document.querySelector('.StatusDisplay').value=`${Status}`;
}

