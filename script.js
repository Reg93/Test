const tabs = document.querySelector('.tabs')

const login = document.querySelector(".login");
document.querySelector('.login__button').addEventListener('click', function(){
    tabs.removeChild(login);
})

const listBox = document.querySelector('.list-box')
const checkbox = document.createElement('input');

document.querySelector('.list__button').onclick = () => {
    checkbox.type = 'checkbox';

    listBox.appendChild(checkbox);
}

listBox.onclick = () => {
    if (checkbox.checked){
        listBox.removeChild(checkbox);
    }
    else return;
}


