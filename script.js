let nome = document.getElementById('text');

window.addEventListener('scroll', function(){
    if(this.window.scrollY < 1200){
        let value = window.scrollY;
        nome.style.opacity < 0.5? nome.style.zIndex = '-1': nome.style.zIndex = '0'
        nome.style.opacity = 1 - (value/150);
        nome.style.top = 15 + value * 0.2 + '%';
    }
})