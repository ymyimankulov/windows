const portfolio__gallary = new Swiper('.portfolio__gallary', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 44,
    navigation: {
        nextEl: '.portfolio__btn-next',
        prevEl: '.portfolio__btn-prev',
    },
});

const about__reviewOuter = new Swiper('.about__review-outer', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.about__review-next',
        prevEl: '.about__review-prev',
    },
});


const about__reviewSwiper = new Swiper('.about__review-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.about__review-swiper-next',
        prevEl: '.about__review-swiper-prev',
    },
});



const about__certificateSwiper = new Swiper('.about__certificate-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.about__certificate-swiper-next',
        prevEl: '.about__certificate-swiper-prev',
    },
});

const products__swiper = new Swiper('.products__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.products__button-next',
        prevEl: '.products__button-prev',
    },
});






const menuItems = document.querySelectorAll('.question__link');

// Добавляем обработчик события для каждого элемента с классом "menuItem"
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное действие по клику на ссылку

        // Получаем соответствующий выпадающий список, следующий за элементом "menuItem"
        const dropdownMenu = menuItem.nextElementSibling;

        // Закрываем все остальные выпадающие списки
        document.querySelectorAll('.question__submenu').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active');
            }
        });

        // Переключаем класс 'active' у текущего выпадающего списка для его скрытия или показа
        dropdownMenu.classList.toggle('active');
    });
});

const menuElements = document.querySelectorAll('.question__link');

menuElements.forEach(menuElement => {
    menuElement.addEventListener('click', function () {
        menuElement.classList.toggle('flipped');
    });
});









// ========== Переменные для "tabo'v" ==========
const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {

    // Получаем атрибут заголовка на который мы кликнули конкретно!
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    // Удаляем от всех заголовков класс active-tab
    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    // Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    // Добавляем класс active-tab, заголовку который нажали в данный момент!
    item.classList.add('active-tab');

    // Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

// Мы указываем, какая конктретно вкладка должна быть активна при загрузке страницы со старта,
// если нужно, чтобы все вкладки ыли скрыты изначально, то удалите код ниже!
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');






document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.products__tab');
    const tabContents = document.querySelectorAll('.products__tab-pane');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('products__active-tab'));
            tabContents.forEach((content) => content.classList.remove('products__active'));

            tab.classList.add('products__active-tab');
            tabContents[index].classList.add('products__active');
        });
    });

    // Активируем первую вкладку и её содержимое при загрузке страницы
    tabs[0].classList.add('products__active-tab');
    tabContents[0].classList.add('products__active');
});





const dotsElements = document.querySelectorAll('.products__element-dots');

function updateDots() {
  dotsElements.forEach((dotsElement) => {
    const screenWidth = window.innerWidth;
    const maxDots = Math.floor(screenWidth / 20); // Adjust the number as needed
    const dots = '.'.repeat(maxDots);
    dotsElement.textContent = dots;
  });
}

// Call the function on page load and when the window is resized
window.addEventListener('load', updateDots);
window.addEventListener('resize', updateDots);





const questionItems = document.querySelectorAll('.question__item');

questionItems.forEach((item) => {
  const link = item.querySelector('.question__link');
  const answer = item.querySelector('.question__answer');

  link.addEventListener('click', (event) => {
    event.preventDefault();
    item.classList.toggle('active');
  });
});



const question__link = document.querySelector('.question__link');
element.addEventListener('click', () => {
  element.classList.add('question__link--active'); // Добавляем класс 'active' при клике
});








const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.header__menu-link');

function setActiveMenuColor() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      menuLinks.forEach(link => link.classList.remove('header__menu-link--active'));
      menuLinks[index].classList.add('header__menu-link--active');
    }
  });
}

window.addEventListener('scroll', setActiveMenuColor);













