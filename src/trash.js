import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  {drawTaskInTrash}  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'


function drawTrash(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    
    for(let i=0;i<Task.trash.length;i++){
        const taskEl = drawTaskInTrash(Task.trash[i])
        
        container.append(taskEl)

    }



    return container
}


export default function loadTrash(){
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Trash');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawTrash())
}