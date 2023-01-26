import { Project, Task, addToProject, deleteFromProject } from './data.js'
import loadAll from './all.js'


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
            main.removeChild(modal)
        })  
    return closeModal
}


function currentWindow(){
    
    const navBar = document.querySelector(".nav-bar")
    var arr = Array.prototype.slice.call( navBar.children )
    
    let res  = arr.find(item => item.dataset.isactive == 'true').innerText;
    

    return res
}

export function addModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('add-modal')
    modal.style.display='flex'
    

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
                title='unnamed'
            }
            const task = new Task(title,description,date,important,project)
            if(project!=''){
                addToProject(task,project)
            }

            
            if(currentWindow()=='All') loadAll()



            console.log(task)

        })


        modal.appendChild(submitBtn)
    
    
   



    return modal
}

export function showModal(task){
    const modal = addModal()
        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.classList.add('btn')
        deleteBtn.textContent = 'DELETE'
        modal.appendChild(deleteBtn)

        deleteBtn.addEventListener('click',()=>{
            console.log('#task title:',task.title)
            console.log('#tasks:',Task.tasks)
            
            Task.tasks = Task.tasks.filter((t)=>t.title!=task.title)
            refresh()
        })



    modal.classList.remove('add-modal')
    modal.classList.add('edit-modal')
        const titleForm = modal.querySelector('.title-form')
        titleForm.value = task.title
        
        const descriptionForm = modal.querySelector('.description-form')
        descriptionForm.value = task.description

        const projectSelect = modal.querySelector('.project-select')

        let index=0
        
        if(task.project!=''){
            console.log('PROJECT EXIST')
            for(let i = 0;i<=Project.projects.length;i++){

                if(task.project==projectSelect.options[i].innerText){
                    
                    index = (projectSelect.options[i].value) 
                   
                }

            }
        }
        projectSelect.selectedIndex = index
        
        const dateForm = modal.querySelector('.date-form')
        dateForm.value = task.date
        
        const importantForm = modal.querySelector('.important-form')
        console.log(task.important)
        const imp = task.important
        
        if(imp=='true'){
            console.log('TRUEEEEE')
            importantForm.dataset.important='true'
            importantForm.classList.add('important')
            importantForm.textContent = 'important'
            importantForm.classList.remove('not-important')
        }

        


        const submitBtn = modal.querySelector('.submit-btn')
        //*cloning nodes to remove all event listeners from submit btn
        const editSubmitBtn = submitBtn.cloneNode(true)
        submitBtn.parentNode.replaceChild(editSubmitBtn,submitBtn)

        editSubmitBtn.addEventListener('click',()=>{
            let title = titleForm.value
            let description = descriptionForm.value
            let project = projectSelect.options[projectSelect.selectedIndex].text
            let important = importantForm.dataset.important
            let date = dateForm.value

            if(project=='none'){
                project=''
            }
            if(title==''){
                title='unnamed'
            }
            
            if(project!=''){
                addToProject(task,project)
            }

            task.title = title
            task.description=description
            task.project=project
            task.important = important
            task.date=date

            
            refresh()



            console.log(task)

        })



    modal.appendChild(X(modal))



    function refresh(){
        if(currentWindow()=='All') loadAll()
    }

    return modal
}