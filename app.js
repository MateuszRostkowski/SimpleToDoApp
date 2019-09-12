const input = document.querySelector('#input')
const ul = document.querySelector('#list')
const removeButton = document.querySelector('#removeAll')

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

removeButton.addEventListener(
    'click',
    () => (
        ul.innerHTML = '<li>You can\'t delete me, but why do you delete all to do\'s?</li>'
    )
)


