const tabs = document.querySelector('.tabs');
let todoList = document.querySelector('.todo-list');

const login = document.querySelector(".login");
document.querySelector('.login__button').addEventListener('click', function(){
    tabs.removeChild(login);
    todoList.style.display = 'block';

})

let listItems = document.querySelector('.list__items')
let checkbox = document.createElement('input');

document.querySelector('.list__button').onclick = () => {
    checkbox.type = 'checkbox';
    checkbox.style.marginTop = '30px';
    checkbox.style.width = '25px';
    checkbox.style.height = '25px';

    listItems.appendChild(checkbox);
}

listItems.onclick = () => {
    if (checkbox.checked){
        listItems.removeChild(checkbox);
    }
    else return;
}


