import AnimateNumbers from './anima-numeros.js';

export default function fetchAnimals(url, target) {
  // cria a div contendo informações
  // com o total dos animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function AnimaAnimalNumbers() {
    const animateNumbers = new AnimateNumbers('[data-numero]', '.numeros', 'ativo');
    animateNumbers.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimals
  async function createAnimals() {
    try {
      // Fetch, espera a resposta e transforma e JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => fillAnimals(animal));
      AnimaAnimalNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
