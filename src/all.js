
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'

function drawAll(){
    const container = document.createElement('div')
    container.classList.add('all-container')

    
    
    
    container.append(drawAddTaskEl())
    for(let i=0;i<Task.tasks.length;i++){
        const taskEl = drawTask(Task.tasks[i])
        
        container.append(taskEl)

    }



    return container
}





export default function loadAll(){
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'All');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawAll())
}