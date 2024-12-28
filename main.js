document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true, 
        slidesPerView: 1, 
        spaceBetween: 20, 
        navigation: { 
            nextEl: '.swiper-bottom-button-next',
            prevEl: '.swiper-bottom-button-prev',
        },
        pagination: {
            el: '.swiper-bottom-pagination',
            clickable: true,
        },
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = 0; 

    window.addEventListener('scroll', () => {
        const scrollToTopButton = document.querySelector('.scroll-to-top');
        const header = document.querySelector("body > main > div.container > div.header");
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > 200 && currentScrollY > lastScrollY) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
        
        lastScrollY = currentScrollY; 
    });
  
    document.querySelector('.scroll-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


 document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetSelector = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);
    
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,  
                behavior: 'smooth'              
            });
        }
        menuMob.classList.remove('active');
        burgerButton.style.backgroundImage = 'url(img/burger.svg)';
    });
    });

const burgerButton = document.querySelector('.burger');
const menuMob = document.querySelector('.menu-mob');
burgerButton.addEventListener('click', function() {
    const currentBackground = window.getComputedStyle(burgerButton).backgroundImage;
    if (currentBackground.includes('burger.svg')) {
        burgerButton.style.backgroundImage = 'url(img/burger_clouse.png)';
    } else {
        burgerButton.style.backgroundImage = 'url(img/burger.svg)';
    }
    menuMob.classList.toggle('active');
});

    const getAccessButtons = document.querySelectorAll('.get-access-btn');
    const formContainer = document.querySelector('.form-container');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');
    function openForm() {
    formContainer.style.display = 'block'; 
    overlay.style.display = 'block';
    }

    function closeForm() {
    formContainer.style.display = 'none'; 
    overlay.style.display = 'none';
    }

    getAccessButtons.forEach(button => {
    button.addEventListener('click', openForm);
    });

    closeButton.addEventListener('click', closeForm);
    overlay.addEventListener('click', closeForm);
    // Элементы формы и управления
// Элементы формы и управления
// Общая функция для отображения сообщения
function showMessage(elementId, message, type) {
    const responseElement = document.getElementById(elementId);
    responseElement.textContent = message;
    responseElement.style.backgroundColor = type === 'success' ? 'green' : 'red';
    responseElement.style.color = '#fff';
    responseElement.style.display = 'block';

    // Если успешное сообщение, скрыть через 2 секунды
    if (type === 'success') {
        setTimeout(() => {
            responseElement.style.display = 'none';
        }, 2000);
    }
}
const apiKey = process.env.SENDINBLUE_API_KEY; 
// Обработчик для формы в футере
async function handleFooterFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('footer-email').value;

    const apiUrl = 'https://api.brevo.com/v3/contacts';
    const data = { email, listIds: [2] };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            showMessage('footer-response-message', 'You have successfully subscribed', 'success');
            document.getElementById('footer-email').value = ''; // Очистить поле
        } else {
            const errorData = await response.json();
            showMessage('footer-response-message', `Error: ${errorData.message}`, 'error');
        }
    } catch (error) {
        showMessage('footer-response-message', `Error: ${error.message}`, 'error');
    }
}

// Обработчик для всплывающей формы
async function handlePopupFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('popup-email').value;

    const apiUrl = 'https://api.brevo.com/v3/contacts';
    const data = { email, listIds: [2] };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            showMessage('popup-response-message', 'You have successfully subscribed', 'success');
            document.getElementById('popup-email').value = ''; // Очистить поле
        } else {
            const errorData = await response.json();
            showMessage('popup-response-message', `Error: ${errorData.message}`, 'error');
        }
    } catch (error) {
        showMessage('popup-response-message', `Error: ${error.message}`, 'error');
    }
}

// Добавление слушателей для каждой формы
document.querySelector('.footer-form').addEventListener('submit', handleFooterFormSubmit);
document.getElementById('brevo-email-form').addEventListener('submit', handlePopupFormSubmit);



});


document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    // Проверяем ширину экрана
    const isMobile = () => window.innerWidth <= 640;

    // Функция для фиксации хедера
    const handleScroll = () => {
        if (isMobile() && window.scrollY > 0) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    };

    // Отслеживаем событие прокрутки
    window.addEventListener("scroll", handleScroll);

    // Отслеживаем изменение размеров экрана
    window.addEventListener("resize", handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    // Проверка и восстановление темы
    if (localStorage.getItem('theme') === 'dark') {
        applyDarkMode();
    }

    // Установка темы при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const lightIcon = document.querySelector('.light-theme-icon');
    const darkIcon = document.querySelector('.dark-theme-icon');

    if (savedTheme === 'dark') {
        body.classList.add('dark');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    } else {
        body.classList.remove('dark');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    }
});

    document.getElementById('toggle-theme').addEventListener('click', function () {
        // Переключение темы
        const lightIcon = document.querySelector('.light-theme-icon');
        const darkIcon = document.querySelector('.dark-theme-icon');
        if (document.body.classList.contains('dark')) {
            removeDarkMode();
            localStorage.setItem('theme', 'light'); // Сохраняем светлую тему
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'inline';
        } else {
            applyDarkMode();
            localStorage.setItem('theme', 'dark'); // Сохраняем тёмную тему
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        }
    });

    function applyDarkMode() {
        // Основной класс для body
        document.body.classList.add('dark');
        
        // Изменение источников изображений на тёмные версии
        document.querySelector('.social-icons a:first-child img').src = 'img/logo-tiktok-black.png';
        document.querySelector('.social-icons a:last-child img').src = 'img/insta-black.png';
        const menuMob = document.querySelector('.menu-mob');
            if (menuMob) {
                menuMob.classList.add('dark-active');
            }
        
        // Список селекторов
        const selectors = [
            '.header',
            '.menu-mob',
            '.hero-title-block h1',
            '.hero-title-block p',
            '.hero-title-block h1 span',
            '.hero-title-block p.text-with-mob',
            '.platform-row-item h3',
            '.platform-row-item p',
            'header ul li a',
            'header button.get-access-btn',
            '.hero-block',
            '.hero-title-block p',
            '.hero-title-block button',
            '.platform-row-item span',
            '.platform-row-item',
            '.platform-bottom-block-content button',
            '.choose-title h2',
            '.choose-item-content p',
            '.choose-item-content span',
            '.choose-item-content-link a',
            '.choose-item-bottom-content',
            '.choose-item-bottom p',
            '.choose-item-bottom span',
            '.hero-block > .hero-title-block > span',
            '.choose-item-bottom:nth-child(2) > .choose-item-bottom-content',
            '.slider-content p',
            '.slider-content span',
            '.slider-content button',
            '.swiper-bottom-button-prev',
            '.swiper-bottom-button-next',
            '.swiper-bottom-pagination .swiper-pagination-bullet',
            '.footer-wrapp',
            '.footer-top-row p',
            '.footer-logo p',
            '.footer-bottom-content-item ul li a',
            '.footer-bootom-privacy-policy p',
            '.privacy-policy-link a',
        ];

        // Применение класса `black` ко всем элементам
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.add('black'));
        });

        // Смена логотипа
        const footerLogo = document.querySelector('.footer-logo img');
        if (footerLogo) {
            footerLogo.src = 'img/logo-footer-dark.png';
        }
    }

    function removeDarkMode() {
        // Удаление основного класса для body
        document.body.classList.remove('dark');
        document.querySelector('.social-icons a:first-child img').src = 'img/logo-tiktok.png';
        document.querySelector('.social-icons a:last-child img').src = 'img/insta.png';
        const menuMob = document.querySelector('.menu-mob');
        if (menuMob) {
            menuMob.classList.remove('dark-active');
        }
        // Список селекторов
        const selectors = [
            '.header',
            '.menu-mob',
            '.hero-title-block h1',
            '.hero-title-block p',
            '.hero-title-block h1 span',
            '.hero-title-block p.text-with-mob',
            '.platform-row-item h3',
            '.platform-row-item p',
            'header ul li a',
            'header button.get-access-btn',
            '.hero-block',
            '.hero-title-block p',
            '.hero-title-block button',
            '.platform-row-item span',
            '.platform-row-item',
            '.platform-bottom-block-content button',
            '.choose-title h2',
            '.choose-item-content p',
            '.choose-item-content span',
            '.choose-item-content-link a',
            '.choose-item-bottom-content',
            '.choose-item-bottom p',
            '.choose-item-bottom span',
            '.hero-block > .hero-title-block > span',
            '.choose-item-bottom:nth-child(2) > .choose-item-bottom-content',
            '.slider-content p',
            '.slider-content span',
            '.slider-content button',
            '.swiper-bottom-button-prev',
            '.swiper-bottom-button-next',
            '.swiper-bottom-pagination .swiper-pagination-bullet',
            '.footer-wrapp',
            '.footer-top-row p',
            '.footer-logo p',
            '.footer-bottom-content-item ul li a',
            '.footer-bootom-privacy-policy p',
            '.privacy-policy-link a',
        ];

        // Удаление класса `black` со всех элементов
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.remove('black'));
        });

        // Смена логотипа
        const footerLogo = document.querySelector('.footer-logo img');
        if (footerLogo) {
            footerLogo.src = 'img/logo-footer.png';
        }
    }
});

