'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let text = document.querySelector('.text');
let collection = document.querySelectorAll('.nav-link');
collection.forEach(function(event){
    event.addEventListener('click', function(){
        for(let elem of collection){
            elem.classList.remove('active');
        }
        event.classList.toggle('active');
        switch(event.innerText){
            case 'Link 1':
                text.textContent = texts.text1;
                break;
            case 'Link 2':
                text.textContent = texts.text2;
                break;
            case 'Link 3':
                text.textContent = texts.text3;
                break;
        }
    })
})
