ToDoList = ['eat veggies','buy milk'] ;
showToDoData();


function SaveToDoData(){
    newData = document.querySelector('#newToDoData').value;

    console.log(newData);
    ToDoList.push(newData);
    showToDoData();

    document.querySelector('#newToDoData').value='';
}

// function showToDoData(){
//     let ToDoData = '';

//     for(let i=0;i<ToDoList.length;i++){
//         ToDoData += ToDoList[i] + "<br>";
//     }

//     document.querySelector('.ToDo-Datas').innerHTML=` ${ToDoData} ` ;

// }

function showToDoData(){

    let ToDoData = '';

    for(let i=0;i<ToDoList.length;i++){
        ToDoData += `
            <div class="ToDoDataContainer">
                ${ToDoList[i]}
                <button id="ToDoDataDelete" onclick="ToDoList.splice(${i},1);showToDoData()">
                    DELETE
                </button>
            </div>
        `;
    }

    document.querySelector('.ToDo-Datas').innerHTML=` ${ToDoData} ` ;
    console.log(ToDoList);

}

