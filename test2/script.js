let todoList = document.querySelector('.todo-list');

let login = document.querySelector('.login');

document.querySelector('.login__button').addEventListener('click', function(){

    if(document.querySelector('.login__input').value == ''){

        return false;
    }
    else { 

        login.style.display = 'none';
        todoList.style.display = 'block';
    }
})



todoList.onclick = (e) => {

    let finish = document.querySelector('.list__finish')

    let listItems = document.querySelector('.list__items')
    
    let task = document.querySelector('.list__input').value;

    if (e.target.className == 'list__button') {

        finish.style.display = 'none';
    
        let box = document.createElement('div');
        box.style.display = 'flex';
        box.style.alignItems = 'center'
        box.className = 'list__box';
    
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'list__checkbox';
        checkbox.style.width = '20px';
        checkbox.style.height = '20px';

        let paragraph = document.createElement('p');
        paragraph.className = 'list__task';

        
        listItems.appendChild(box);
        box.appendChild(checkbox);
        box.appendChild(paragraph);
        paragraph.textContent = task;
        document.querySelector('.list__input').value = '';

    } 

    if(e.target.className == 'list__checkbox'){
        
        let target = e.target.parentNode;

        target.parentNode.removeChild(target);

        let arrItems = [...listItems.querySelectorAll('*')];

        if (arrItems == ''){

            finish.style.display = 'block';
            
        }
    }
}

