        // Class : 
            class User{
                constructor(name, age , UserName , Pswd , T_color){
                    this.name = name;
                    this.age = age;
                    this.UserName = UserName;
                    this.Pswd = Pswd;
                    this.color = T_color;
                    this.role = "User";
                    // console.log(this);
                };
                User_Text_message(customMsg) {
                    let h2 = document.createElement("h2");
                    console.log(this.color);
                    h2.style.color = this.color;
                    if(customMsg){
                        h2.innerText = `${this.name} : ${customMsg}`;
                    }else{
                        h2.innerText = `${this.name} : I'm writing now ,with a  ${this.color} colour .`;
                    }
                    document.body.append(h2);
                };
            };
        
        //Inheritance : Child Class Inheriting from Parent class
            class Admin extends User{
                constructor(name, age , UserName , Pswd , T_color){
                    super(name, age , UserName , Pswd , T_color); //this is initializing all values of Admin Class to that Parent's class constructor . As it is inheritated , so this class will also have those properties and functions .
                    this.role="Admin";
                };

                removeAllMsg(){
                    document.querySelectorAll("h2").forEach(function(element){
                        element.remove();
                    });
                    let h3= document.createElement("h3");
                    h3.textContent = "All message are cleared by admin";
                    // console.dir(h3);
                    h3.style.textAlign = "center";
                    document.body.append(h3);
                    setTimeout(function(){
                        document.querySelector("h3").remove();
                    },2000);
                };
            };


        //Object Creation : 
            let u1 = new User("Sam",22,"sam@DeStRuCtOr","FOJKS%5414@sd2","red");
            //u1.User_Text_message();
            //u1.User_Text_message("bye");

            let u2 = new User("Payel",16,"PapaKePari@Tigress","teriiiiii##$$%%456","blue");
            //u2.User_Text_message();
            //u2.User_Text_message("hello bachaa");

            /* Admin */
            let a1 = new Admin("Admin01",99,"adminstartor_001","sdfs&*%^544FFBHVGH$%$&^56","darkgreen");

            let a2 = new Admin("admin02",65,"admin002","sdfs5465##","blueviolet");

            