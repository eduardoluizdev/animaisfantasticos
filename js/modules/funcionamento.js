export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  dataOperation() {
    this.daysWeek = this.operation.dataset.semana.split(',').map(Number);
    this.weekTime = this.operation.dataset.horario.split(',').map(Number);
  }

  dataNow() {
    this.dataNow = new Date();
    this.dayNow = this.dataNow.getDay();
    this.timeNow = this.dataNow.getUTCHours() - 3;
  }

  itsOpen() {
    const weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
    const scheduleOpen = (this.timeNow >= this.weekTime[0] && this.timeNow < this.weekTime[1]);
    return weekOpen && scheduleOpen;
  }

  activeOpen() {
    if (this.itsOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
