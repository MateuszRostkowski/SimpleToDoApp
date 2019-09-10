const input = document.querySelector('#input')
const ul = document.querySelector('#list')

console.log(ul)

function addTask() {
    const li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)
    input.value = ""
}


input.addEventListener(
    'keydown',
    (e) => {
        if (e.key === 'Enter') {            
            addTask()
        }        
    }
)


