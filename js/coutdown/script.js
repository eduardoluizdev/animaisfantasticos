import Countdown from './coutdown.js';

const myAniversary = new Countdown('12 January 2021 00:00:00 GMT-0300');



setInterval(() =>{
  console.log(myAniversary.total)
}, 1000)