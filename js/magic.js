document.body.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '💗'; // Добавляем сердечко
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    // Генерируем случайный размер от 30 до 100 пикселей
    const size = Math.floor(Math.random() * 31) + 10; // Размер от 30 до 100
    heart.style.fontSize = `${size}px`; // Применяем случайный размер

    document.body.appendChild(heart);

    // Увеличиваем сердечко при появлении
    heart.style.transform = 'scale(1.5)';

    // Удаляем элемент через 1 секунду
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Отключение контекстного меню
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Запретить выделение текста
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Переворот карточки при нажатии
const card = document.getElementById('card');

card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Переключаем класс flipped
});