
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'

function drawAll(){
    const container = document.createElement('div')
    container.classList.add('all-container')

    const task11 = new Task('task1','des','11-1',true,[])
    const task12 = new Task('task1','des','11-1',true,[])
    const task13 = new Task('task1','des','11-1',true,[])

    
    container.append(drawAddTaskEl())
    for(let i=0;i<Task.tasks.length;i++){
        const taskEl = drawTask(Task.tasks[i])
        
        container.append(taskEl)

    }



    return container
}





export default function loadAll(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawAll())
}