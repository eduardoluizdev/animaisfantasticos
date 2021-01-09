export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.containerModal = document.querySelector(container);
  }

  toggleModal(e) {
    e.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  clickOutModal(e) {
    if (e.target === this) {
      this.toggleModal(e);
    }
  }

  addModalEvent() {
    this.openButton.addEventListener('click', this.toggleModal);
    this.closeButton.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
  }
}
