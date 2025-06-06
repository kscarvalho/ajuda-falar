 
  const associarSomAnimal = (nomeAnimal) => {
  const imagens = document.querySelectorAll(`.${nomeAnimal}`);
  const som = document.getElementById(nomeAnimal);

  if (som) {
    imagens.forEach(imagem => {
      imagem.addEventListener('click', () => {
        som.play();
      });
    });
  }
};

// Lista de animais
const animais = [
  'vaca',
  'cachorro',
  'ovelha',
  'leao',
  'arara',
  'girafa',
  'boi',
  'galinha',
  'gato',
  'pato',
  'pinto',
  'porco'
];

// Aplica a função para cada animal
animais.forEach(associarSomAnimal);


