import { Project, Task, addToProject, deleteFromProject } from './data.js'
import loadAll from './all.js'
import loadCompleted from './completed.js'
import { checkDuplicate, checkUnnamedTasks, refresh, sortTasks } from './globalFunctions.js'
import { isValid } from 'date-fns'
import { isPast } from 'date-fns'




function X(modal){
    const closeModal = document.createElement('div')
    closeModal.classList.add('close-modal')
    
        const lX = document.createElement('span')
        const rX = document.createElement('span')
        lX.classList.add('line')
        rX.classList.add('line')
        closeModal.appendChild(lX)
        closeModal.appendChild(rX)

        closeModal.addEventListener('click',()=>{
           // modal.style.display='none'
            const main = document.querySelector("#main")
            const modalBackground = document.querySelector('#modal-background')
            modalBackground.style.display='none'
            main.removeChild(modal)
        })  
    return closeModal
}

export function newProjectModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.appendChild(X(modal))

    const modalBackground = document.querySelector('#modal-background')
    modalBackground.style.display='block'


    const titleForm = document.createElement('input');
    titleForm.type = 'text';
    titleForm.placeholder = 'Project title';
    titleForm.classList.add('title-form');
    titleForm.classList.add('text-form');
    modal.appendChild(titleForm);

    const descriptionForm = document.createElement('textarea');
    descriptionForm.placeholder = 'Description';
    descriptionForm.classList.add('description-form');
    descriptionForm.classList.add('text-form');
    modal.appendChild(descriptionForm);

    const submitBtn=document.createElement('div')
    submitBtn.innerText = 'SUBMIT'
    submitBtn.classList.add('btn')
    submitBtn.classList.add('submit-btn')
    

    submitBtn.addEventListener('click',()=>{
        console.log("EVENT EVENT")
        
        let title = titleForm.value
        let description = descriptionForm.value
        
        if(title==''){
            let duplicateIndex=0
            title = checkDuplicate('unnamed project','unnamed project','project',duplicateIndex)
        }
        if(title!=''){
            let duplicateIndex=0
            title = checkDuplicate(title,title,'project',duplicateIndex)
        }

        new Project(title,description,[])
        refresh()
    })
    modal.appendChild(submitBtn)
    

    

    return modal
}

export function moreProjectModal(project){

    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.appendChild(X(modal))

    const modalBackground = document.querySelector('#modal-background')
    modalBackground.style.display='block'
   



    const titleForm = document.createElement('input');
    titleForm.value = project.title
    let oldTitle = titleForm.value
    titleForm.type = 'text';
    titleForm.placeholder = 'Project title';
    titleForm.classList.add('title-form');
    titleForm.classList.add('text-form');
    modal.appendChild(titleForm);

    const descriptionForm = document.createElement('textarea');
    descriptionForm.value = project.description
    descriptionForm.placeholder = 'Description';
    descriptionForm.classList.add('description-form');
    descriptionForm.classList.add('text-form');
    modal.appendChild(descriptionForm);

        const numOfTasksDisplay = document.createElement('div')
        const numOfDoneTasksDisplay =  document.createElement('div')
        const toDoLeftDisplay =  document.createElement('div')
        numOfTasksDisplay.classList.add('project-task-number-displayer')
        numOfDoneTasksDisplay.classList.add('project-task-number-displayer')
        numOfTasksDisplay.innerText = 'Tasks in project: '+project.tasks.length

        let numOfDoneTasks=0
        for(let i = 0;i<project.tasks.length;i++){
            let task = Task.tasks.find(t => t.title==project.tasks[i])
            console.log('TASK$$$:', task)
            if(task.isDone==true) numOfDoneTasks++
        }
        numOfDoneTasksDisplay.innerText = 'Done tasks: '+numOfDoneTasks
        
        let toDoLeft = project.tasks.length-numOfDoneTasks
        toDoLeftDisplay.innerText='To do '+toDoLeft+' left'

        modal.appendChild(numOfTasksDisplay)
        modal.appendChild(numOfDoneTasksDisplay)
        modal.appendChild(toDoLeftDisplay)


    const deleteBtn=document.createElement('div')
    deleteBtn.innerText = 'DELETE'
    deleteBtn.classList.add('btn')
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click',()=>{
        console.log(project.tasks.length)
        console.log(project.tasks)
        for(let i = 0;i<project.tasks.length; i++){
            let task = Task.tasks.find(t => t.title==project.tasks[i])
            Task.trash.push(task)
            Task.tasks = Task.tasks.filter((t)=>t.title!=task.title)
            deleteFromProject(task,project)
            i--
        }
        Project.trash.push(project)
        Project.projects = Project.projects.filter((p)=>p.title!=project.title)

        refresh()
    })

    modal.appendChild(deleteBtn)

    const submitBtn=document.createElement('div')
    submitBtn.innerText = 'SUBMIT'
    submitBtn.classList.add('btn')
    submitBtn.classList.add('submit-btn')

       

    submitBtn.addEventListener('click',()=>{
        let title = titleForm.value
        let description = descriptionForm.value

        if(title==''){
            let duplicateIndex=0
            title = checkDuplicate('unnamed project','unnamed project','project',duplicateIndex)
           

        }
        if(title!=''){
            let duplicateIndex=0
            if(title!=oldTitle){
                title = checkDuplicate(title,title,'project',duplicateIndex)
            }
            
        }

        project.title = title
        project.description = description


        refresh()

    })

    modal.appendChild(submitBtn)

    return modal
}



export function addModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('add-modal')
    modal.style.display='flex'
    const modalBackground = document.querySelector('#modal-background')
    modalBackground.style.display='block'

    modal.appendChild(X(modal))
       
        const titleForm = document.createElement('input');
        titleForm.type = 'text';
        titleForm.placeholder = 'Title';
        titleForm.classList.add('title-form');
        titleForm.classList.add('text-form');
        modal.appendChild(titleForm);
    
        const descriptionForm = document.createElement('textarea');
        descriptionForm.placeholder = 'Description';
        descriptionForm.classList.add('description-form');
        descriptionForm.classList.add('text-form');
        modal.appendChild(descriptionForm);

        const projectForm = document.createElement('div')
        projectForm.classList.add('project-form')
            const projectSelect = document.createElement('select')
            projectSelect.classList.add('project-select')
            projectForm.appendChild(projectSelect)

            const opt = document.createElement('option')
            opt.value=0
            opt.text='none'
            projectSelect.appendChild(opt)

            for(let i=0;i<Project.projects.length;i++){
                const opt = document.createElement('option')
                opt.value=i+1
                opt.text=Project.projects[i].title
                projectSelect.appendChild(opt)
            }


            modal.appendChild(projectForm);            

        const dateForm = document.createElement('input');
        dateForm.type = 'date';
        dateForm.classList.add('date-form');
        modal.appendChild(dateForm);
    

        
        const importantForm = document.createElement('div')
        importantForm.classList.add('important-form')
        importantForm.classList.add('not-important')
        importantForm.textContent = 'not important'
        importantForm.dataset.important=false
        importantForm.addEventListener('click',()=>{
            importantForm.classList.toggle('not-important')
            importantForm.classList.toggle('important')

            if(importantForm.classList.contains('important')){
                importantForm.textContent = 'important'
                importantForm.dataset.important=true
            }
            else if(importantForm.classList.contains('not-important')){
                importantForm.textContent = 'not important'
                importantForm.dataset.important=false
            }


        })
        modal.appendChild(importantForm)



        const submitBtn=document.createElement('div')
        submitBtn.innerText = 'SUBMIT'
        submitBtn.classList.add('btn')
        submitBtn.classList.add('submit-btn')

        submitBtn.addEventListener('click',()=>{
            let title = titleForm.value
            let description = descriptionForm.value
            let project = projectSelect.options[projectSelect.selectedIndex].text
            let important = importantForm.dataset.important
            let date = dateForm.value

            if(project=='none'){
                project=''
            }
            if(title==''){
                let duplicateIndex=0
                title = checkDuplicate('unnamed','unnamed','task',duplicateIndex)
               

            }
            if(title!=''){
                let duplicateIndex=0
                title = checkDuplicate(title,title,'task',duplicateIndex)
            }


            const task = new Task(title,description,date,important,project)
            if(project!=''){
                addToProject(task,project)
            }

            
            refresh()



            console.log(task)

        })


        modal.appendChild(submitBtn)
    
    
   



    return modal
}

export function showModal(task){
    const modal = addModal()
    const modalBackground = document.querySelector('#modal-background')
    modalBackground.style.display='block'
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.classList.add('btn')
        deleteBtn.textContent = 'DELETE'
        buttons.appendChild(deleteBtn)

        deleteBtn.addEventListener('click',()=>{
            Task.trash.push(task)
            Task.tasks = Task.tasks.filter((t)=>t.title!=task.title)
            if(task.project!=''){
                let project = Project.projects.find(p => p.title==task.project)
                deleteFromProject(task,project)
                console.log('DELETED')
            }
            
            refresh()
        })



    modal.classList.remove('add-modal')
    modal.classList.add('edit-modal')
        const titleForm = modal.querySelector('.title-form')
        titleForm.value = task.title
        let oldTitle=titleForm.value
        
        const descriptionForm = modal.querySelector('.description-form')
        descriptionForm.value = task.description

        const projectSelect = modal.querySelector('.project-select')

        let index=0
        
        let oldProject=null 
        if(task.project!=''){

            console.log('PROJECT EXIST')
            for(let i = 0;i<=Project.projects.length;i++){

                if(task.project==projectSelect.options[i].innerText){

                   
                    index = (projectSelect.options[i].value) 
                   
                }

            }
            oldProject = projectSelect.options[index].innerText
            oldProject = Project.projects.find(p => p.title==oldProject)
            console.log(oldProject)
        }
        projectSelect.selectedIndex = index
        
        
        

        let dateForm = modal.querySelector('.date-form')
        if(isValid(task.date)==true){
            dateForm = modal.querySelector('.date-form')
            dateForm.value = task.date.toISOString().substring(0,10)
        }
        
       
        
        const importantForm = modal.querySelector('.important-form')
        console.log(task.important)
        const imp = task.important
        
        if(imp=='true'){
            
            importantForm.dataset.important='true'
            importantForm.classList.add('important')
            importantForm.textContent = 'important'
            importantForm.classList.remove('not-important')
        }

        const submitBtn = modal.querySelector('.submit-btn')
        
        const editSubmitBtn = submitBtn.cloneNode(true)
        buttons.appendChild(editSubmitBtn)
        modal.removeChild(submitBtn)
        //submitBtn.parentNode.replaceChild(editSubmitBtn,submitBtn)

        editSubmitBtn.addEventListener('click',()=>{

           //deleteFromProject(task,oldProject)
            

            let title = titleForm.value
            let description = descriptionForm.value
            let project = projectSelect.options[projectSelect.selectedIndex].text
            let important = importantForm.dataset.important
            let date = dateForm.value

            if(project=='none'){
                project=''
            }
            if(title==''){
                let duplicateIndex=0
                
                title = checkDuplicate('unnamed','unnamed','task',duplicateIndex)
               

            }
            if(title!=''){
                let duplicateIndex=0
                if(title!=oldTitle){
                    title = checkDuplicate(title,title,'task',duplicateIndex)
                }
                
            }
            
            if(project!='' && oldProject!=null){
                // console.log(task)
                // console.log('OLD: ',oldProject)
                // console.log('NEW:',project)
                console.log('---NOWY NIE PUSTY oraz STARY NIE PUSTY')
                deleteFromProject(task,oldProject)
                addToProject(task,project)
               
            }
            else if(project!='' && oldProject==null){
                console.log('NOWY NIE PUSTY oraz STARY PUSTY')
                addToProject(task,project)
            }
            else if(project=='' && oldProject!=null){
                console.log('NOWY PUSTY oraz STARY PUSTY')
                deleteFromProject(task,oldProject)
            }


            task.title = title
            task.description=description
            task.project=project
            task.important = important
            task.date=date

            if(isPast(task.date)){
                task.isOverdue = true
            }else{
                task.isOverdue = false
            }
            
            
            refresh()



        })
        refresh()


        modal.appendChild(buttons)
    modal.appendChild(X(modal))



    

    return modal
}



