// Получаем все кнопки "Листать"
const nextButtons = document.querySelectorAll('#nextBtn');
const restartButton = document.querySelector('#restartBtn');

let currentPage = 'index'; // начальная страница

// Функция для перехода к другой странице
function goToPage(pageId) {
 document.querySelectorAll('.page').forEach(p => p.style.display='none');
 document.getElementById(pageId).style.display='flex';
 currentPage = pageId;

 // Можно добавить эффект перелистывания тут или через CSS классы
}

// Обработчик кнопки "Листать"
nextButtons.forEach(btn => {
 btn.addEventListener('click', () => {
   if(currentPage==='index'){
     goToPage('page2');
   } else if(currentPage==='page2'){
     goToPage('page3');
   } else if(currentPage==='page3'){
     goToPage('page4');
   }
 });
});

// Обработчик кнопки "Вернуться к началу"
if(restartButton){
 restartButton.addEventListener('click', () => {
   goToPage('index');
 });
}

// Цвет фона из ползунка
const bgRange = document.getElementById('bgColorRange');
if(bgRange){
 bgRange.addEventListener('input', () => {
   const val = bgRange.value; // от0 до255
   document.body.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
 });
}

// Обработка клика по новой круглой кнопке
const soundBtn = document.querySelector('.custom-button');

if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    // Включаем звук
    const video = document.getElementById('coverVideo'); // убедитесь, что у вас есть такой элемент
    if (video) {
      video.muted = false;

      // Пытаемся воспроизвести видео
      video.play().then(() => {
        // Успешно — скрываем кнопку
        soundBtn.style.display = 'none';
      }).catch((error) => {
        console.error("Ошибка воспроизведения видео:", error);
      });
    }
  });
}

const nextBtn = document.getElementById('nextBtn');

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    // Воспроизведение звука переворота страницы
    playPageFlipSound();

    // Переход на следующую страницу
    if(currentPage==='index'){
        goToPage('page2');
    } else if(currentPage==='page2'){
        goToPage('page3');
    } else if(currentPage==='page3'){
        goToPage('page4');
    }
  });
}

// Функция воспроизведения звука переворота страницы (если есть)
function playPageFlipSound() {
   const flipSound = new Audio('flip.mp3'); // убедитесь что файл есть в проекте
   flipSound.play();
}
