let d = document;
let btnProfile = d.getElementById('btn-profile');
let data = d.querySelector('.profile__data');
let redes = d.querySelector('.profile__redes');
let card = d.querySelector('.card__profile');

const mediumBp = matchMedia('min-width:768px');
// mediumBp.addListen
d.addEventListener('click',(e)=>{

    if(e.target == btnProfile){
        data.classList.toggle('data-active');
        redes.classList.toggle('redes-active');
        card.classList.toggle('card-bg-active');
        btnProfile.classList.toggle('btn-active')
    }
});