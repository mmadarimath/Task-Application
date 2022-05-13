let form = document.getElementById('form');
let textInput = document.getElementById('text-input');
let dateInput = document.getElementById('date-input');
let textarea = document.getElementById('textarea');
let warn = document.getElementById('warn');
let tasks = document.getElementById('tasks');




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
        textInput.value = "";
        acceptData();
        
    }
};

let data = {};

let acceptData = function(){
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["desciption"] = textarea.value;
    // console.log(data);
    createTasks();
}

let createTasks =  function(){
    tasks.innerHTML += `<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.desciption}</p>
    
    <span class="options">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
    </span>
</div>`;
};