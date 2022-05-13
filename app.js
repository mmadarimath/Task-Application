let form = document.getElementById('form');
let textInput = document.getElementById('text-input');
let dateInput = document.getElementById('date-input');
let textarea = document.getElementById('textarea');
let warn = document.getElementById('warn');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');



form.addEventListener('submit', function(e){
    e.preventDefault();
    formValidation();
});

let formValidation = function(){
    if(textInput.value === ''){
       console.log('Failed');
       warn.innerHTML = "Task cannot be empty";
       
    }
    else{
        console.log('Successful');
        warn.innerHTML = "";
        // textInput.value = "";
        acceptData();
        add.setAttribute('data-bs-dismiss', 'modal');
        add.click();

        (function(){
            add.setAttribute('data-bs-dismiss', '');
        })();
    }
};

let data = [];

let acceptData = function(){
    data.push({
        text: textInput.value,
        date: dateInput.value,
        desciption: textarea.value,
})

    localStorage.setItem("data", JSON.stringify(data));
   
    console.log(data);
    createTasks();
}

let createTasks =  function(){
    tasks.innerHTML += `<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.desciption}</p>
    
    <span class="options">
        <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
        <i onClick = "deleteTask(this)" class="fa-regular fa-trash-can"></i>
    </span>
</div>`;
resetForm();
};

let deleteTask = function(e){
    e.parentElement.parentElement.remove();
};

let editTask =  function(e){
   let selectedTask = e.parentElement.parentElement;


   textInput.value = selectedTask.children[0].innerHTML;
   dateInput.value = selectedTask.children[1].innerHTML;
   textarea.value = selectedTask.children[2].innerHTML;
}; 

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

