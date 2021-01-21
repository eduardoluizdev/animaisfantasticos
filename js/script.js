import TabNav from './modules/tabs.js';
import Accordion from './modules/accordion.js';
import SmoothScroll from './modules/smooth-scroll.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/menu-dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import Operation from './modules/funcionamento.js';
import fetchAnimals from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import SlideNav from './modules/slide.js';

const smoothscroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothscroll.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const loginModal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
loginModal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anima="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation('[data-semana]', 'aberto');
operation.init();

fetchAnimals('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
