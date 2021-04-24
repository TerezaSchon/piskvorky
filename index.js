'use strict';

document.querySelector('.box').addEventListener('click', (event) => {
  if (jePolickoPrazdne(event.target) === true) {
    zobrazSymbolVPoli(kdoJeNaTahu(), event.target);
  } else {
    console.log('Blbečku');
  }

  if (kdoVyhral() === true) {
    //vyskočí okno, hra se zablokuje a skončí...
    confirm(
      'Vyhrál ten, kdo má ' + `${kdoJeNaTahu()}. ` + 'Chcete hrát novou hru?',
    );
    {
      location.reload();
    }
  } else {
    zmenaHrace();
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

/* ----- změna ikonky, která ukazuje, kdo je na tahu ----- */

let zmenaHrace = () => {
  console.log(kdoJeNaTahu());
  if (kdoJeNaTahu() === 'kolecko') {
    document.querySelector('.ikona-kolecko').attributes.alt.value = 'krizek';
    document.querySelector('.ikona-kolecko').attributes.src.value =
      'obrazky/krizek.svg';
    event.target.disabled = true;
  } else {
    document.querySelector('.ikona-kolecko').attributes.alt.value = 'kolecko';
    document.querySelector('.ikona-kolecko').attributes.src.value =
      'obrazky/kolecko.svg';
    event.target.disabled = true;
  }
};

/* ------ zjišťujeme, zda a kdo vyhrál ----- */
const kdoVyhral = () => {
  console.log('Zjišťujeme, kdo vyhrál');
  let aktualniStavPole = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  let pocitadlo = 0;

  document.querySelectorAll('.box .box__button').forEach((buttonElm) => {
    /* console.log(buttonElm); */
    let policko = coJeNaPolicku(buttonElm);

    let vybranePolickoSouradniceY = Math.floor(pocitadlo / 10);
    /* console.log(pocitadlo); */

    /* console.log(vybranePolickoSouradniceY); */

    let vybranePolickoSouradniceX = pocitadlo % 10;
    /* console.log(vybranePolickoSouradniceX); */

    /* console.log(
      pocitadlo,
      vybranePolickoSouradniceX,
      vybranePolickoSouradniceY,
    ); */

    aktualniStavPole[vybranePolickoSouradniceY][
      vybranePolickoSouradniceX
    ] = policko;

    pocitadlo += 1;
  });
  console.log(aktualniStavPole);
  console.log(aktualniStavPole[0][0]);

  let vyhral = false;

  // ------ 5 vedle sebe ------ //

  let radek = 0;

  while (radek < aktualniStavPole.length) {
    let sloupec = 0;
    while (sloupec < 6) {
      if (
        aktualniStavPole[radek][sloupec] ===
          aktualniStavPole[radek][sloupec + 1] &&
        aktualniStavPole[radek][sloupec + 1] ===
          aktualniStavPole[radek][sloupec + 2] &&
        aktualniStavPole[radek][sloupec + 2] ===
          aktualniStavPole[radek][sloupec + 3] &&
        aktualniStavPole[radek][sloupec + 3] ===
          aktualniStavPole[radek][sloupec + 4] &&
        aktualniStavPole[radek][sloupec] !== ''
      ) {
        /* console.log('bingo'); */
        vyhral = true;
      }
      sloupec++;
    }
    radek++;
  }

  // ------ pět pod sebou ------ //

  radek = 0;

  while (radek < 5) {
    let sloupec = 0;
    while (sloupec < aktualniStavPole.length) {
      if (
        aktualniStavPole[radek][sloupec] ===
          aktualniStavPole[radek + 1][sloupec] &&
        aktualniStavPole[radek + 1][sloupec] ===
          aktualniStavPole[radek + 2][sloupec] &&
        aktualniStavPole[radek + 2][sloupec] ===
          aktualniStavPole[radek + 3][sloupec] &&
        aktualniStavPole[radek + 3][sloupec] ===
          aktualniStavPole[radek + 4][sloupec] &&
        aktualniStavPole[radek][sloupec] !== ''
      ) {
        /* console.log('bingo'); */
        vyhral = true;
      }
      sloupec++;
    }
    radek++;
  }
  console.log(vyhral);
  return vyhral;
};

/* ----- zjišťujeme, zda je políčko prázdné, případně co je na něm za ikonu ----- */

let coJeNaPolicku = (buttonElm) => {
  if (buttonElm.classList.contains('kolecko')) {
    /* console.log('Obsazeno kolečkem'); */
    return 'O';
  } else if (buttonElm.classList.contains('krizek')) {
    /* console.log('Obsazeno křížkem'); */
    return 'X';
  } else {
    return '';
  }
};
