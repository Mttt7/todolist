
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'
import { refresh, sortTasks } from './globalFunctions.js'
import { format } from 'date-fns'
import { isToday } from 'date-fns'



function drawToday(){
    const container = document.createElement('div')
    container.classList.add('container')

    console.log(format(new Date(), 'do-LLL-yyyy'))
    
    
    container.append(drawAddTaskEl())
    sortTasks('tasks')
    for(let i=0;i<Task.tasks.length;i++){
        if(Task.tasks[i].isDone==false && isToday(Task.tasks[i].date)){

            const taskEl = drawTask(Task.tasks[i])
        
            container.append(taskEl)
        }
        //refresh()
        

    }



    return container
}





export default function loadToday(){
    const main = document.querySelector("#main")

    const navBar = document.querySelector(".nav-bar")
    

    for(let i = 0;i<navBar.children.length-2;i++){
        navBar.children[i].dataset.isactive=false
    }
   
    var arr = Array.prototype.slice.call( navBar.children )
    let res  = arr.find(item => item.innerText == 'Today');
    res.dataset.isactive=true
    


    main.textContent=''
    main.appendChild(drawToday())
}