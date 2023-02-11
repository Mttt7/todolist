
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask, { drawAddProject, drawProject }  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'
import { refresh } from './globalFunctions.js'
import { format } from 'date-fns'
import { isSameWeek } from 'date-fns'
import { isPast } from 'date-fns'



function drawProjects(){
    const container = document.createElement('div')
    container.classList.add('container')
    container.classList.add('projects-container')

    container.appendChild(drawAddProject())
    
    
    
    for(let i=0;i<Project.projects.length;i++){
            const projectEl = drawProject(Project.projects[i])
            container.append(projectEl)
        
        //refresh()
        

    }



    return container
}

export default function loadProjects(){
    const main = document.querySelector("#main")
    const navBar = document.querySelector(".nav-bar")
    
    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Projects');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawProjects())
}