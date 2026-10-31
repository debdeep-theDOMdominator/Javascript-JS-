// submitted at : 13-may-2026 : 8.17 Pm

console.log('-----------');

//INITIALISATIONS : 
let UserDetails = document.querySelector(".UserDetails");
let UserInputs = document.querySelectorAll("input");
let contentPopulate = document.querySelector(".contentPopulate");
let contentPopulateCard = document.querySelector(".contentPopulateCard");


//CREATE NEW ELEMENTS :



//OUTPUT CHECKS AT INITIAL STAGE: 
console.log(UserDetails);
console.log(UserInputs);






// UserDetails Form Submit : 

UserDetails.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(dets);
    console.log(UserInputs);

    UserInputs.forEach(element => {
        if(element.value==""){
            console.log(`desc EMPTY : ${null}`);
        }else if(element.value!="User Details Submit"){
            console.log(element.value);
        }
    });

    console.dir(contentPopulate);

    content_Populate_Visibility();
})


// contentPopulate Section : 

function content_Populate_Visibility(){
    contentPopulate.style.visibility = "visible" ;



}


