const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navigator = document.getElementById('navigatorbar');

if (bar) {
    bar.addEventListener('click', () => {
        navigator.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        navigator.classList.remove('active');
    })
}

