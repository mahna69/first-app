let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal__action--negative')

for(let i=0;i < selectPlanBtn.length;i++){
    selectPlanBtn[i].addEventListener('click',() => {
modal.style.display='block'
backdrop.style.display='block'
    })
}


backdrop.addEventListener('click',closemodal)
modalCloseBtn.addEventListener('click',closemodal)

function closemodal() {
    modal.style.display='none'
backdrop.style.display='none'
}