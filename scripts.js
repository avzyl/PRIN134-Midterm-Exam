// 1. PET
const petBtns = document.querySelectorAll('.btn-full');

petBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('i');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    });
});  

// 2. PET ALL
const btnPetAll = document.querySelector('#btn-select-all');

btnPetAll.addEventListener('click', () => {
    petBtns.forEach((button) => {
      const icon = button.querySelector('i');
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    });
});

// 3. UNPET ALL
const btnUnpetAll = document.querySelector('#btn-unselect-all');

btnUnpetAll.addEventListener('click', () => {
    petBtns.forEach((button) => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
})

const cards = document.querySelectorAll('.card');
function removeActiveState() {
    cards.forEach((card) => {
      card.classList.remove('active', 'card-selected');
    });
  }

// 4. LAST
const btnLast = document.querySelector('#btn-select-last');
btnLast.addEventListener('click', () => {
    removeActiveState();
    const lastCard = cards[cards.length - 1];
    lastCard.classList.add('active', 'card-selected');
});

// 5. FIRST
const btnFirst = document.querySelector('#btn-select-first');
btnFirst.addEventListener('click', () => {
    removeActiveState();
    const firstCard = cards[0];
    firstCard.classList.add('active', 'card-selected');
});

// 6. NEXT BUTTON
const btnNext = document.querySelector('#btn-select-next');
btnNext.addEventListener('click', () => {
    const activeCard = document.querySelector('.card-selected');
    const nextCard = activeCard.nextElementSibling || cards[0];
    removeActiveState();
    nextCard.classList.add('active', 'card-selected');
});

// 7. PREVIOUS BUTTON
const btnPrev = document.querySelector('#btn-select-previous');
btnPrev.addEventListener('click', () => {
    const activeCard = document.querySelector('.card-selected');
    const previousCard =
      activeCard.previousElementSibling || cards[cards.length - 1];
    removeActiveState();
    previousCard.classList.add('active', 'card-selected');
});

// 8. SITE LOGO
const logo = document.querySelector('.banner-content');
logo.addEventListener('click', () => {
    logo.classList.add('animate__animated', 'animate__bounce');
    
    logo.addEventListener('animationend', () => {
        logo.classList.remove('animate__bounce');
        logo.style.setProperty('--animate-duration', '0.5s');
    });
});
