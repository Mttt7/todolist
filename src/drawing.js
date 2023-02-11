import {addModal, moreProjectModal, newProjectModal, showModal} from './modals.js'
import {Project, Task} from './data.js'
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
    if(task.important=='true'){
        console.log("TASK IMPORTANT")
        taskEl.classList.add('task-el-important')
    }
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

function drawNoProjectInfo(){
    const el = document.createElement('div')
    el.innerText='No tasks!'
    el.classList.add('add-task-el')
    


    return el
}


export function drawProject(project){

    // console.log(project._tasks)
console.log(project)

    const projectEl = document.createElement('div')
    projectEl.classList.add('project-el')
     
        //project title:
            const projectBar = document.createElement('div')
            projectBar.classList.add('project-bar')
            projectEl.appendChild(projectBar)

                const projectTitle = document.createElement('div')
                projectTitle.classList.add('project-title')
                projectTitle.innerText = project.title
                projectBar.appendChild(projectTitle)

                const moreBtn = document.createElement('div')
                moreBtn.classList.add('more-btn')
                moreBtn.classList.add('btn')
                moreBtn.innerText='More'

                moreBtn.addEventListener('click',drawMoreProjectModal)



                projectBar.appendChild(moreBtn)






    //adding tasks to project:
        for(let i = 0;i<project.tasks.length;i++){
            const t = Task.tasks.find(e => e.title==project.tasks[i])
            const taskEl = drawTask(t)
            projectEl.appendChild(taskEl)
        }
        if(project.tasks.length==0){
            
            projectEl.appendChild(drawNoProjectInfo())
        }




    return projectEl
}


export function drawAddProject(){
    const projectEl = document.createElement('div')
    projectEl.classList.add('add-task-el')
    projectEl.classList.add('add-project-el')
        const newBtn = document.createElement('div')
        newBtn.classList.add('new-btn')
        newBtn.classList.add('btn')
        newBtn.textContent="NEW PROJECT"
        projectEl.appendChild(newBtn)

        newBtn.addEventListener('click',drawNewProjectModal)

    return projectEl
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

function drawNewProjectModal(){
    const main = document.querySelector("#main")
    main.appendChild(newProjectModal())
}
function drawMoreProjectModal(e){
    const main = document.querySelector("#main")
    let projectTitle = e.target.parentElement.children[0].textContent
    let project = Project.projects.find(t => t._title==projectTitle)
    
    main.appendChild(moreProjectModal(project))
}
export function drawProjectInTrash(project){

    
    const projectEl = drawProject(project)

    const projectBar = projectEl.querySelector('.project-bar')
    projectBar.removeChild(projectBar.querySelector('.more-btn'))
    
    const recoverBtn = document.createElement('div')
        recoverBtn.classList.add('recover-btn')
        
        recoverBtn.classList.add('recover-btn-project')
        recoverBtn.classList.add('btn')
        recoverBtn.innerText='Recover'
        projectBar.appendChild(recoverBtn)

        recoverBtn.addEventListener('click',()=>{
            
            Project.trash = Project.trash.filter(p=>p.title!=project.title)
            
            Project.projects.push(project)
           
            refresh()
            
        })


    
    return projectEl

}

function drawAddModal(){
    const main = document.querySelector("#main")
    main.appendChild(addModal())
    
}

function drawShowModal(e){
    const main = document.querySelector("#main")
    let taskTitle = e.target.parentElement.children[1].textContent
    let task = Task.tasks.find(t => t._title==taskTitle)
    
    main.appendChild(showModal(task))
}