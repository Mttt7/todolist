
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

    constructor(title,description,date,important,project){
        this._title = title
        this._description = description
        this._date = date
        this._important = important
        this._project = project

        Task.tasks.push(this)
    }

    get title(){ return this._title}
    get description(){ return this._description}
    get date(){ return this._date}
    get important(){ return this._important}
    get project(){ return this._project}

    set title(title){this._title=title}
    set description(description){ this._description=description}
    set date(date){this_date = date}
    set important(important){this._important = important}
    set project(project){ this._project=project}


    

}

//???
export function addToProject(taskTitle,projectTitle){
    const task = Task.tasks.find(t => t._title===taskTitle)
    task._project = projectTitle
    const project = Project.projects.find(p => p._title===projectTitle)
    project._tasks.push(taskTitle)
    console.log("added ",taskTitle,"to ",projectTitle)

}

export function deleteFromProject(taskTitle,projectTitle){
    const task = Task.tasks.find(t => t._title===taskTitle)
    task._project=''
    const project = Project.projects.find(p => p._title===projectTitle)
    project._tasks = project._tasks.filter(t =>t!==taskTitle)
    console.log("deleted ",taskTitle,"from ",projectTitle)
}

