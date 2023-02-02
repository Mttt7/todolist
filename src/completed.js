import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'



function drawCompleted(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    
    for(let i=0;i<Task.tasks.length;i++){
        if(Task.tasks[i].isDone==true){
            const taskEl = drawTask(Task.tasks[i])
            const isDone = taskEl.querySelector('.is-done')
            isDone.checked=true
            container.append(taskEl)
        }
        

    }



    return container
}

export default function loadCompleted(){
    console.log("LOAD COMPLETED")
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Completed');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawCompleted())
}