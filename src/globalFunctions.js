import loadAll from "./all";
import loadCompleted from "./completed";
import loadTrash from "./trash";
import loadToday from "./today";
import loadThisWeek from "./thisWeek";
import loadProjects from "./projects";

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