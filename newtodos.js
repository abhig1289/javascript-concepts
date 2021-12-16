let inputElement = document.querySelector('input');
let formElement = document.querySelector('form'); 
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let taskList = [
    'Buy Groceries', 
    'Car Services'
];

function deleteItem(e){
   let task=e.target.parentElement.previousElementSibling.innerHTML;
   let index=taskList.indexOf(task);
   if(index!=-1){
       taskList.splice(index,1);
   }
   populateList()
}



function populateList(){
    listElement.innerHTML='';
    taskList.forEach(function(item){
        let newItem = document.createElement('li');

        //add new span for text
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        // add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete')
        anchorElement.innerHTML='<i class="fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click',(e)=>deleteItem(e));

        //add li to ul
        listElement.append(newItem);
    })
    totalTasksElement.innerHTML=taskList.length;
    inputElement.value='';
}

populateList();


function doesNotHaveWhiteSpace(s){
    let stringWithoutSpace=s.trim();
    return stringWithoutSpace.length>0;
}
function addTask(){
    listElement.innerHTML='';
    if(inputElement.value && doesNotHaveWhiteSpace(inputElement.value) && !taskList.includes(inputElement.value)){
        taskList.push(inputElement.value);
        populateList();
    }
    inputElement.value='';
}


formElement.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
})