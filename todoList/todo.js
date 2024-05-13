let todoList = [];
doc();
function add()
{
    let element = document.querySelector('#input-text');
    let todo = element.value;
    todoList.push(todo);
    element.value = "";
     doc();
}
function doc ()
{
    let element = document.querySelector("#todo-enter");
     
    element.innerText = " ";
    for (let  i = 0 ; i < todoList.length ; i++)
        { 
        

                element.innerText = element.innerText + "\n" + todoList[i];
        }
}