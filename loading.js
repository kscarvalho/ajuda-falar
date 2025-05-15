let addAtivo = document.querySelector('main');
let button = document.querySelector('.ring')
let addBranco = document.querySelector('body')


button.addEventListener('click', () => {
addAtivo.classList.add('ativo')
button.classList.add('opaco')
addBranco.classList.add('branco')
});