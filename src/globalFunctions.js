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

// export function checkUnnamedTasks(){
//     let unn=0
//     console.log(Task.tasks)
//     for(let i = 0;i<Task.tasks.length;i++){
//         console.log(Task.tasks[i].title)
//         console.log('unn:',unn)
//         if(Task.tasks[i].title.slice(0,7)=='unnamed'){
            
//             unn++
//         }
//     }
//     for(let i = 0; i<Task.trash.length;i++){
//         if(Task.trash[i].title.slice(0,7)=='unnamed'){
//             unn++
//         }
//     }
//     return unn
    
// }

// export function checkUnnamedProject(){
//     let unn=0
    
//     for(let i = 0;i<Project.projects.length;i++){
//         console.log(Project.projects[i].title)
//         console.log('unn:',unn)
//         if(Project.projects[i].title.slice(0,7)=='unnamed'){
            
//             unn++
//         }
//     }
//     for(let i = 0; i<Project.trash.length;i++){
//         if(Project.trash[i].title.slice(0,7)=='unnamed'){
//             unn++
//         }
//     }
//     return unn
// }



                // (title,task/project) 
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



// export function checkDuplicate(basedTitle,title,type,duplicateIndex){
//     if(type=='task'){
//         for(let i = 0; i<Task.tasks.length; i++){
//             console.log("loop working---")
//             console.log(Task.tasks[i].title)
//             if(Task.tasks[i].title==title){
//                 console.log("DUPLICATE DETECTED!!!")
//                 duplicateIndex++
//                 title=basedTitle+ ' ('+duplicateIndex+')'
                
                
//                 checkDuplicate(basedTitle,title,type,duplicateIndex)

//             }
            
//         }
        
            
//         return title
        



//     }
// }