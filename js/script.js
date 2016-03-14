var div = document.createElement('div');

div.style.width = '800px';
div.style.height = '600px';
div.style.backgroundColor = '#ffffff';
div.style.border = '1px solid gray';
div.style.paddingTop = '25px';
div.style.paddingLeft = '100px';
document.body.appendChild(div);

var h1 = document.createElement('h1');
h1.innerHTML = 'Тест по программированию';
h1.style.textAlign = 'center';
div.appendChild(h1);


var ul1 = document.createElement('ul');
ul1.innerHTML = 'Вопрос № 1';
ul1.style.listStyleType = 'none';
div.appendChild(ul1);

var li1ul1 = document.createElement('li');
li1ul1.innerHTML = '&#x25A1; Вариант ответа № 1';
ul1.appendChild(li1ul1);

var li2ul1 = document.createElement('li');
li2ul1.innerHTML = '&#x25A1; Вариант ответа № 2';
ul1.appendChild(li2ul1);

var li3ul1 = document.createElement('li');
li3ul1.innerHTML = '&#x25A1; Вариант ответа № 3';
ul1.appendChild(li3ul1);


var ul2 = document.createElement('ul');
ul2.innerHTML = 'Вопрос № 2';
ul2.style.listStyleType = 'none';
div.appendChild(ul2);

var li1ul2 = document.createElement('li');
li1ul2.innerHTML = '&#x25A1; Вариант ответа № 1';
ul2.appendChild(li1ul2);

var li2ul2 = document.createElement('li');
li2ul2.innerHTML = '&#x25A1; Вариант ответа № 2';
ul2.appendChild(li2ul2);

var li3ul2 = document.createElement('li');
li3ul2.innerHTML = '&#x25A1; Вариант ответа № 3';
ul2.appendChild(li3ul2);


var ul3 = document.createElement('ul');
ul3.innerHTML = 'Вопрос № 3';
ul3.style.listStyleType = 'none';
div.appendChild(ul3);

var li1ul3 = document.createElement('li');
li1ul3.innerHTML = '&#x25A1; Вариант ответа № 1';
ul3.appendChild(li1ul3);

var li2ul3 = document.createElement('li');
li2ul3.innerHTML = '&#x25A1; Вариант ответа № 2';
ul3.appendChild(li2ul3);

var li3ul3 = document.createElement('li');
li3ul3.innerHTML = '&#x25A1; Вариант ответа № 3';
ul3.appendChild(li3ul3);


var button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
button.style.width = '326px';
button.style.height = '52px';
button.style.backgroundColor = '#cfe2f3';
button.style.border = '2px solid black';
button.style.margingLeft = '250px';
div.appendChild(button);
