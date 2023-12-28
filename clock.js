const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');
 
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();


sdfdwdwasdca

const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();






<?php
// Создаём просто массив.
$array = array(1, 2, 3, 4, 5);
print_r($array);

// Теперь удаляем каждый элемент, но сам массив оставляем нетронутым:
foreach ($array as $i => $value) {
    unset($array[$i]);
}
print_r($array);

// Добавляем элемент (обратите внимание, что новым ключом будет 5, вместо 0).
$array[] = 6;
print_r($array);

// Переиндексация:
$array = array_values($array);
$array[] = 7;
print_r($array);
?>
