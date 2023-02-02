import loadAll from "./all";
import loadCompleted from "./completed";
import loadTrash from "./trash";
import loadToday from "./today";
import loadThisWeek from "./thisWeek";

function currentWindow(){
    
    const navBar = document.querySelector(".nav-bar")
    var arr = Array.prototype.slice.call( navBar.children )
    
    let res  = arr.find(item => item.dataset.isactive == 'true').innerText;
    
    console.log("###current widnow: "+res)

    return res
}

export function refresh(){
    console.log("###refreshing: ")
    if(currentWindow()=='All') loadAll()
    if(currentWindow()=='Trash') loadTrash()
    if(currentWindow()=='Completed') loadCompleted()
    if(currentWindow()=='Today') loadToday()
    if(currentWindow()=='This week') loadThisWeek()
}