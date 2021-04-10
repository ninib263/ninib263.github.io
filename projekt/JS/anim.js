const many = document.querySelector('#mobil-meny')
const menyLink = document.querySelector('.toppnav_meny')

many.addEventListener('click', function(){
    many.classList.toggle('is-active');
    menyLink.classList.toggle('active');
});