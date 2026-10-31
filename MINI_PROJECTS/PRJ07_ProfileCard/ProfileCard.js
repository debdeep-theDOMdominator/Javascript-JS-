console.log('-----------');

//INITIALISATIONS : 
let main = document.querySelector("main");
let UserDetails = document.querySelector(".UserDetails");
let UserInputs = document.querySelectorAll("input");
let contentPopulate = document.querySelector(".contentPopulate");
// let contentPopulateCard = document.querySelector(".contentPopulateCard");



//OUTPUT CHECKS AT INITIAL STAGE: 
console.log(UserDetails);
console.log(UserInputs);
console.log("-------");






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

    // console.dir(contentPopulate);

    content_Populate_Visibility_On(dets);
    
    console.log("-------");
});

UserDetails.addEventListener("reset",function(dets){
    console.log("bye");
    console.log(dets);
    console.log(UserInputs);
    UserInputs.forEach(element => {
        if(element.value!=="UserDetailsReset" && element.value!=="User Details Submit"){
            element.value= null ;   
        }
        console.log(element.value);
    });

    content_Populate_Visibility_Off(dets);

    console.log("-------");
});


// contentPopulate Section : 

function content_Populate_Visibility_On(dets){

    //CREATE NEW ELEMENTS :
        let contentPopulate = document.createElement("div");
            contentPopulate.classList.add("contentPopulate");

        let contentPopulateCard = document.createElement("div");
            contentPopulateCard.classList.add("contentPopulateCard");

            let CandidateProfilePic = document.createElement("div");
                CandidateProfilePic.classList.add("CandidateProfilePic");

                let CandidatePic = document.createElement("img");
            let CandidateProfileName = document.createElement("h2")
            let CandidateProfilePhoneNumber= document.createElement("h3");
            let CandidateProfileDesignation=document.createElement("h3");
            let CandidateProfileDescription = document.createElement("p");
        
    //ASSIGNING VALUES :

        CandidatePic.setAttribute("src", UserInputs[4].value);

        CandidateProfileName.textContent = UserInputs[0].value;

        CandidateProfilePhoneNumber.textContent = UserInputs[1].value;

        CandidateProfileDesignation.textContent = UserInputs[2].value;

        CandidateProfileDescription.textContent = UserInputs[3].value;

    //SETTING THE CONTENTS ACCORDINGLY :
        document.querySelector("main").appendChild(contentPopulate);
        contentPopulate.appendChild(contentPopulateCard);
        contentPopulateCard.appendChild(CandidateProfilePic);
            CandidateProfilePic.appendChild(CandidatePic);
        contentPopulateCard.appendChild(CandidateProfileName);
        contentPopulateCard.appendChild(CandidateProfilePhoneNumber);
        contentPopulateCard.appendChild(CandidateProfileDesignation);
        contentPopulateCard.appendChild(CandidateProfileDescription);

        
        console.log(contentPopulate);
        console.log("-------");

};


function content_Populate_Visibility_Off(dets){
    let contentPopulate = document.querySelector(".contentPopulate");

    if(contentPopulate){
        contentPopulate.remove();
    }
};


