const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        let cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';
        }
    });
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s';
});
