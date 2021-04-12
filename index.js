'use strict';

/* const hraciPole = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

document.querySelector('#btn1').addEventListener('click', selectSmiley);
 */

/* let kdoJeNaTahu = 'circle';

const selectBtn = (e) => {
  e.target.classList.add('.box__button--selected');
};
console.log(selectBtn);

document
  .querySelectorAll('.box__button')
  .addEventListener('click', selectBtn, kdoJeNaTahu);
 */

document.querySelector('.box').addEventListener('click', (event) => {
  if (jePolickoPrazdne(event.target) === true) {
    zobrazSymbolVPoli(kdoJeNaTahu(), event.target);
    zmenaHrace();
  } else {
    console.log('Blbečku');
  }
});

const jePolickoPrazdne = (policko) => {
  if (
    policko.classList.contains('kolecko') ||
    policko.classList.contains('krizek')
  ) {
    return false;
  } else {
    return true;
  }
};

let kdoJeNaTahu = () => {
  return document.querySelector('.ikona-kolecko').attributes.alt.value;
};

let zobrazSymbolVPoli = (symbol, policko) => {
  policko.classList.add(symbol);
};

let zmenaHrace = () => {
  console.log(kdoJeNaTahu());
  if (kdoJeNaTahu() === 'kolecko') {
    document.querySelector('.ikona-kolecko').attributes.alt.value = 'krizek';
  } else {
    document.querySelector('.ikona-kolecko').attributes.alt.value = 'kolecko';
  }
};
