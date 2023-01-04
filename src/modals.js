export function addModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('add-modal')
    modal.style.display='flex'
    console.log('crerated')


        const closeModal = document.createElement('div')
        closeModal.classList.add('close-modal')
        modal.appendChild(closeModal)
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
            }
            else if(importantForm.classList.contains('not-important')){
                importantForm.textContent = 'not important'
            }


        })
        modal.appendChild(importantForm)



        const submitBtn=document.createElement('div')
        submitBtn.innerText = 'SUBMIT'
        submitBtn.classList.add('btn')
        submitBtn.classList.add('submit-btn')
        modal.appendChild(submitBtn)
    
    
   



    return modal
}

export function showModal(){

}