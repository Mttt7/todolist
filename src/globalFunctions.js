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
export function checkDuplicate(basedTitle,title,type,duplicateIndex,history){
    if(type=='task'){
       
        
        
        for(let i = 0; i<history.length; i++){
            if(history[i].title==title){
                //console.log(basedTitle,' o obecnej nazwie ',title,' jest w tablicy! zmieniamy mu nazwe')
                duplicateIndex++
                title=basedTitle+ ' ('+duplicateIndex+')'
               // console.log('teraz ',basedTitle,'to: ',title)
                
                
                checkDuplicate(basedTitle,title,type,duplicateIndex,history)

            }
            
        }
        
            //console.log('zmienilismy nazwe z ',basedTitle,' na ',title,' koniec---')
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