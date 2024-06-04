const btn_hamburguer = document.querySelector('.area_main_hamburguer')

function toggleMain(event){
    if(event.type === 'touchstart')event.preventDefault()
    const nav = document.querySelector('.links')
    nav.classList.toggle('active')
    btn_hamburguer.classList.toggle('active')
}

btn_hamburguer.addEventListener('click', toggleMain)
btn_hamburguer.addEventListener('touchstart', toggleMain)