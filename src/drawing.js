import {addModal, showModal} from './modals.js'
import {Task} from './data.js'


export default function drawTask(task){
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-el')
        const isDone = document.createElement('input')
        isDone.type = 'checkbox'
        isDone.classList.add('is-done')
        taskEl.appendChild(isDone)

        const taskName = document.createElement('div')
        taskName.classList.add('task-title')
        console.log(task.name)
        taskName.textContent = task.title
        taskEl.appendChild(taskName)

        const taskDate = document.createElement('div')
        taskDate.classList.add('task-date')
        taskDate.textContent = task.date
        taskEl.appendChild(taskDate)

        const showBtn = document.createElement('div')
        showBtn.classList.add('show-btn')
        showBtn.classList.add('btn')
        showBtn.textContent = 'SHOW'
        taskEl.appendChild(showBtn)

        showBtn.addEventListener('click',drawShowModal)



    return taskEl
}

export function drawAddTaskEl(){
    const taskEl = document.createElement('div')
    taskEl.classList.add('add-task-el')
        const newBtn = document.createElement('div')
        newBtn.classList.add('new-btn')
        newBtn.classList.add('btn')
        newBtn.textContent="NEW"
        taskEl.appendChild(newBtn)

        newBtn.addEventListener('click',drawAddModal)

    return taskEl
}

function drawAddModal(){
    const main = document.querySelector("#main")
    main.appendChild(addModal())
    
}

function drawShowModal(e){
    const main = document.querySelector("#main")
    let taskTitle = e.target.parentElement.children[1].textContent
    let task = Task.tasks.find(t => t._title==taskTitle)
    console.log(task)
    main.appendChild(showModal(task))


}