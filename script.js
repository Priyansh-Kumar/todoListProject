let todoList=[];
display();

function addtodo(){
    let userInput=document.querySelector('#task');
    let userDate=document.querySelector('#date');
    let todoItem=userInput.value;
    let todoDate=userDate.value;
    todoList.push({work: todoItem,duedate: todoDate});
    localStorage.setItem('todolist',JSON.stringify(todoList));
   
    userInput.value='';
    userDate.value='';
    display();
}

function display(){
    let displaySpace=document.querySelector(".todo-list");
    let newList='';
    let todoData=JSON.parse(localStorage.getItem('todolist'));
    todoList=todoData?todoData:[];
    for(let i=0;i<todoList.length;i++){
       let{work,duedate}=todoList[i];
        newList=newList+`<div>
        <span class="work user-list">${work}</span></div><span class="date user-list">${duedate}</span>
        <button id="my-btn"class="btn"onclick="deleteWork(${i})">Delete</button>
      `;
    }
    displaySpace.innerHTML=newList;
}
function deleteWork(i){
  localStorage.clear();
  todoList.splice(i,1);
  localStorage.setItem('todolist',JSON.stringify(todoList));
        display();
}
/*todoList.splice(${i},1);
        display();*/
