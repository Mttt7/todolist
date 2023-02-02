
import { Project, Task, addToProject, deleteFromProject } from './data.js'
import  drawTask  from './drawing.js'
import {drawAddTaskEl} from './drawing.js'
import { refresh } from './globalFunctions.js'

const p1 = new Project('projekt1','opis projektu',[])
const p2 = new Project('projekt2','opis projektu',[])
const p3 = new Project('projekt3','opis projektu',[])


function drawAll(){
    const container = document.createElement('div')
    container.classList.add('container')

    
    
    
    container.append(drawAddTaskEl())
    for(let i=0;i<Task.tasks.length;i++){
        if(Task.tasks[i].isDone==false){
            const taskEl = drawTask(Task.tasks[i])
        
            container.append(taskEl)
        }
        refresh()
        

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