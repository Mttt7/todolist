//import {  format } from 'date-fns'

export class Project{
    static projects = []
    constructor(title,description,tasks){
        this._title = title
        this._description = description
        this._tasks = tasks
        Project.projects.push(this)
        
    }

    get title(){return this._title}
    get description(){return this._description}
    get tasks(){return this._tasks}


    set title(title){this._title=title}
    set description(description){ this._description=description}
    set tasks(tasks){this._tasks=tasks}
    
}

//One task can only belong to one project
export class Task{
    static tasks = []
    static trash = []

    constructor(title,description,date,important,project){
        this._title = title
        this._description = description
        this._date = new Date(date)
        this._important = important
        this._project = project
        this._isDone = false

        Task.tasks.push(this)
    }

    get title(){ return this._title}
    get description(){ return this._description}
    get date(){ return this._date}
    get important(){ return this._important}
    get project(){ return this._project}
    get isDone(){return this._isDone}

    set title(title){this._title=title}
    set description(description){ this._description=description}
    set date(date){this._date = new Date(date)}
    set important(important){this._important = important}
    set project(project){ this._project=project}
    set isDone(isDone){this._isDone=isDone}

    

}

//???
export function addToProject(task,projectTit){

    task.project = projectTit
    const project = Project.projects.find(item => item.title == projectTit);
    
    project.tasks.push(task.title)

    //console.log("added ",task.title,"to ",project.title)

}

export function deleteFromProject(task,project){
    let toDel = task._project
    task._project=''
    project._tasks = project._tasks.filter(t =>t!==task.title)
    console.log("deleted ",toDel,"from ",project.title)
}

