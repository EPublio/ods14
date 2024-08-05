document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav-bar');
    const button = document.getElementById('nav-button');
    const navScreen = document.getElementById('nav-screen');
    let isVisible = false;

    button.addEventListener('click', () => {
        if (isVisible) {
            nav.classList.remove('show');
            nav.classList.add('hide');
            
            nav.addEventListener('transitionend', function resetPosition() {
                nav.classList.add('reset');
                nav.classList.remove('hide');
                navScreen.classList.add('hide');
                nav.removeEventListener('transitionend', resetPosition);
            }, { once: true });
        } else {
            nav.classList.remove('reset');
            nav.classList.add('show');
            navScreen.classList.remove('hide');
        }
        isVisible = !isVisible;
    });
});