import loadAll from "./all";
import loadCompleted from "./completed";
import loadTrash from "./trash";
import loadToday from "./today";
import loadThisWeek from "./thisWeek";
import loadProjects from "./projects";
import { Project, Task } from "./data";
import { drawTaskInTrash } from "./drawing";

function currentWindow(){
    
    const navBar = document.querySelector(".nav-bar")
    var arr = Array.prototype.slice.call( navBar.children )
    
    let res  = arr.find(item => item.dataset.isactive == 'true').innerText;
    
    

    return res
}

export function refresh(){
    console.log("###refreshing: ")
    if(currentWindow()=='All') loadAll()
    if(currentWindow()=='Trash') loadTrash()
    if(currentWindow()=='Completed') loadCompleted()
    if(currentWindow()=='Today') loadToday()
    if(currentWindow()=='This week') loadThisWeek()
    if(currentWindow()=='Projects') loadProjects()
}

export function checkDuplicate(basedTitle,title,type,duplicateIndex){
    if(type=='task'){

        for(let i = 0; i<Task.history.length; i++){
            if(Task.history[i].title==title){
                duplicateIndex++
                title=basedTitle+ ' ('+duplicateIndex+')'
                
                checkDuplicate(basedTitle,title,type,duplicateIndex)
            }
            
            
        }  
       
        if(Task.history.filter(t => t.title==title).length>0){
            var generate = require('project-name-generator')
            title=generate().spaced
        }

        return title
    }
    if(type=='project'){

        for(let i = 0; i<Project.history.length; i++){
            if(Project.history[i].title==title){
                duplicateIndex++
                title=basedTitle+ ' ('+duplicateIndex+')'
                
                checkDuplicate(basedTitle,title,type,duplicateIndex)
            }
            
            
        }  
       
        if(Project.history.filter(t => t.title==title).length>0){
            var generate = require('project-name-generator')
            title=generate().spaced
        }

        return title
    }
}


