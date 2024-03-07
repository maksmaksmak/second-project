const body = document.querySelector('.body')

btnChangeBackground.onclick = changeBackground

function changeBackground() {
 body.classList.toggle('green')   
 btnChangeBackground.classList.toggle('white') 
}