
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'

function drawAll(){
    const container = document.createElement('div')
    container.classList.add('all-container')

    const task11 = new Task('taskowyu','des','11-04-2023',true,[])
    const task12 = new Task('eeelo','opisik','11-02-2024',true,[])
    const task14 = new Task('task1ss','dessssssss','11-01-1999',true,[])
    const task15 = new Task('ZADANIE DO WYKONANIAAAAAAAAAAAAA','JAKIS ZZZ OPIS XD','15-07-2023',true,[])

    const project1 = new Project('projekt1','to jest opis projektu1',[])
    addToProject(task11.title,project1.title)
    
    
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