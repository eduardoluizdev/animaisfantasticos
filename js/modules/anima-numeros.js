export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom, com número em seu texto
  // incremente a partir de 0 zero até o numero final
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar número para cada
  // número do dom
  animationNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  // função que ocorre sempre que uma mutação acontecer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animationNumbers();
    }
  }

  // adiciona o MutationObserver para verificar
  // quando a classe ativo é adicionada
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
