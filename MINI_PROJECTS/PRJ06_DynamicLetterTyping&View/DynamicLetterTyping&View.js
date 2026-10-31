
let dynamicLetter = document.querySelector(".dynamicLetter");
console.dir(dynamicLetter);
console.log(dynamicLetter.textContent);

window.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key==" "){
        dynamicLetter.textContent="SPC";
    }else{
        dynamicLetter.textContent=event.key;
    }
});









