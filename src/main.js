/* Loading page processing with window.onload */
processing = () => {
  document.querySelector('.load-container').style.display = 'none';
  document.querySelector('.root').style.display = 'flex';
}
window.onload = () => { processing() }

let aux1 = 1;
let aux2 = 1;
let choiceClassVenue = document.querySelectorAll('.venueContainer');
let venuesContainer = document.querySelector('#venuesContainer');
let choiceClassYear = document.querySelectorAll('.yearContainer');
let yearsContainer = document.querySelector('#yearsContainer');
venuesContainer.addEventListener('click', () => {

  if (aux1 === 1) {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'flex';
    }
    venuesContainer.style.background = '#ffe521';
    aux1 = 0;
  } else {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'none';
    }
    venuesContainer.style.background = '#ffffff';
    aux1 = 1;
  }
});
yearsContainer.addEventListener('click', () => {
  if (aux2 === 1) {
    for (let newStyle of choiceClassYear) {
      newStyle.style.display = 'flex';
    }
    yearsContainer.style.background = '#56f89a';
    aux2 = 0;
  } else {
    for (let newStyle of choiceClassYear) {
      newStyle.style.display = 'none';
    }
    yearsContainer.style.background = '#ffffff';
    aux2 = 1;
  }
});