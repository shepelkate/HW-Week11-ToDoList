
function createTask() {
    let input = document.getElementById('input1')
    let contentToDo = input.value
    let listElement = document.getElementById('list1')
    let newElement = document.createElement('li')
    newElement.textContent = contentToDo
    listElement.prepend(newElement)
}
document.getElementById('button1').onclick = createTask;


function checkTask(event) {
            if (event.target.tagName === 'LI') {
            event.target.classList.toggle('active'); 
        }
}

let list = document.getElementById('list1')
    list.addEventListener('click', checkTask) 

