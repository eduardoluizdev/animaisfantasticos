import initTabNav from './modules/tabs.js';
import initAccordion from './modules/accordion.js';
import SmoothScroll from './modules/smooth-scroll.js';
import initAnimationOnScroll from './modules/animation-scroll.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/menu-dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const smoothscroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothscroll.init();

initTabNav();
initAccordion();
initAnimationOnScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
