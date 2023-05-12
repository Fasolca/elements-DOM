"use strict"

//1. Получите доступ и сохраните необходимые для дальнейшей работы элементы DOM.

const question  = document.getElementsByClassName('question')[0];

console.log(question);

const answer = document.getElementsByClassName('answer')[0];

console.log(answer);

const options = document.getElementsByClassName('options')[0];

console.log(options);


//2 Воспользуйтесь вариантами для ответа на вопрос «Как вы относитесь к JS?», которые представлены в списке с классом options. Вам необходимо взять текст из варианта ответа и передать его в сам ответ, а не просто вручную скопировать его.

answer.children[0].append(options.children[2].firstChild);


//3. Установите для элемента с классом answer пользовательский нестандартный и защищённый data-* атрибут с именем selected-option и значением порядковым номером выбранного варианта ответа.

answer.setAttribute('data-selected-option', '3')


//4. Скройте один из тех вариантов ответа, которые вам меньше всего нравятся.

const hideAnswer = options.children[5];

hideAnswer.setAttribute('hidden','')


//5. Дополните список вариантов своим собственным вариантом. Для этого необходимо создать новый элемент li с текстом варианта ответа и вставить его в список вариантов ответа.

const newAnswer = document.createElement('li');

newAnswer.textContent = 'Очень интересно и перспективно!';

options.children[0].before(newAnswer)


//6. Для нового элемента с собственным вариантом ответа создайте CSS-правило с классом self, в котором установите какие-нибудь свойства на свой выбор, и добавьте этот класс к данному элементу. CSS-правило можете разместить как в отдельном файле .css, либо в элементе style внутри файла index.html.

newAnswer.classList.add('self')


//7. Для элемента с самым первым выбранным вариантом ответа установите свои стили через атрибут – свойство style, которые выберите на свой выбор.

answer.children[0].style.color = 'rgb(61, 71, 207)'
answer.children[0].style.backgroundColor = 'rgb(248, 246, 217)'