 const associarSomLetras = (nomeLetra) => {
  const imagens = document.querySelectorAll(`.${nomeLetra}`);
  const som = document.getElementById(nomeLetra);

  if (som) {
    imagens.forEach(imagem => {
      imagem.addEventListener('click', () => {
        som.play();
      });
    });
  }
};

// Lista de Letras
const letras = [
  'letraA',
  'letraB',
  'letraC',
  'letraD',
  'letraE',
  'letraF',
  'letraG',
  'letraH',
  'letraI',
  'letraJ',
  'letraL',
  'letraM',
  'letraN',
  'letraO',
  'letraP',
  'letraQ',
  'letraR',
  'letraS',
  'letraT',
  'letraU',
  'letraV',
  'letraW',
  'letraX',
  'letraZ',


];

// Aplica a função para cada animal
letras.forEach(associarSomLetras);




