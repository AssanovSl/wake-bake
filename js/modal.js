
const modal = document.querySelector('.modal')
const aboutBtn = document.querySelector('.about__img-button')
const body = document.querySelector('.body')
const btnClosed = document.querySelector('.modal__close')

aboutBtn.addEventListener('click', ()=>{

    
    body.classList.add('body--opened-modal')

})

btnClosed.addEventListener('click',()=>{
    body.classList.remove('body--opened-modal')
})