const input = document.querySelector('#input')
const ul = document.querySelector('#list')

console.log(ul)

function addTask() {
    const li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)
    input.value = ""
    li.onclick = removeItem
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.target)
}


input.addEventListener(
    'keydown',
    (e) => {
        if (e.key === 'Enter') {            
            addTask()
        }        
    }
)


