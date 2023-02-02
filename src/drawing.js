import {addModal, showModal} from './modals.js'
import {Task} from './data.js'
import loadTrash from './trash.js';
import loadCompleted from './completed.js';
import { is } from 'date-fns/locale';
import { refresh } from './globalFunctions.js';
import { format, isToday } from 'date-fns'
import { formatDistance } from 'date-fns'
import { differenceInHours } from 'date-fns'
import { isPast } from 'date-fns'


export default function drawTask(task){
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-el')
        const isDone = document.createElement('input')
        isDone.type = 'checkbox'
        isDone.classList.add('is-done')
        if(task.isDone==true) isDone.checked=true
        taskEl.appendChild(isDone)

        isDone.addEventListener('click',()=>{
            console.log("-------")
            console.log(task) 
            if(task.isDone==false){
                console.log("task.isDone==false")
                task.isDone = true
            }
            else if(task.isDone==true){
                console.log("task.isDone==true")
                task.isDone = false
            }
            refresh()

           console.log(task) 
           console.log("-------")
        })


        const taskName = document.createElement('div')
        taskName.classList.add('task-title')
        
        taskName.textContent = task.title
        taskEl.appendChild(taskName)

        const taskDate = document.createElement('div')
        taskDate.classList.add('task-date') 
        if(isNaN(task.date)) taskDate.textContent='no deadline'
        
        else{
            if(isPast(task.date) && !isToday(task.date)){
                taskDate.textContent = formatDistance(new Date(),task.date) + ' ago'
            }
            else{
            if(isToday(task.date)) taskDate.textContent='TODAY'
    
            else if(differenceInHours(task.date,new Date())>72){
                
                taskDate.textContent = format(task.date,'do-LLL-yyyy')
            }
            else taskDate.textContent = formatDistance(new Date(),task.date) + ' left'
            }
            
        }
        
        taskEl.appendChild(taskDate)

        const showBtn = document.createElement('div')
        showBtn.classList.add('show-btn')
        showBtn.classList.add('btn')
        showBtn.textContent = 'SHOW'
        taskEl.appendChild(showBtn)

        showBtn.addEventListener('click',drawShowModal)



    return taskEl
}

export function drawTaskInTrash(task){
    const taskEl = drawTask(task)

    taskEl.removeChild(taskEl.querySelector('.show-btn'))
    
    const recoverBtn = document.createElement('div')
        recoverBtn.classList.add('recover-btn')
        recoverBtn.classList.add('btn')
        recoverBtn.innerText='Recover'
        taskEl.appendChild(recoverBtn)

        recoverBtn.addEventListener('click',()=>{
            
            Task.trash = Task.trash.filter(t=>t.title!=task.title)
            
            
            Task.tasks.push(task)
           
            refresh()
            
        })


    
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