//деструктурирующее присваивание
//задача 1
//Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
//func(‘a’, ‘b’, ‘c’, ‘d’) →
//{
//first: ‘a’,
//other: [‘b’, ‘c’, ‘d’]
//}

function task1() {
  const obj = { el1: 81, el2: 2, el3: 3, el4: 4 };
  const { el1, ...other } = obj;
  console.log(el1);
  let task1rez = [];
  return (task1rez = Array.from(other));
}

console.log(task1());

//Задача 2
//Организовать функцию getInfo, которая принимает объект вида
//{ name: ...,  info: { employees: [...], partners: [ … ]  } }
//и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
//const organisation = {
//name: 'Google',
//info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
//};
//getInfo(organisation); →
//Name: Google
//Partners: Microsoft Facebook
const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};
function getInfo({ name = "Unknown", partners } = {}) {
  console.log(organisation.name, organisation.info.partners.splice(0, 2));
}

console.log(getInfo());

//функции высшего порядка
//задача 1

function firstFunc(arr, secondFunc) {
  let hoarr = [1, 2, 3];
  let newString = "";
  return (newString = "New value: " + hoarr.toString());
  function secondFunc() {
    let str = "";
    for (let i = 0; i < hoarr.length; i++) {
      return (str = "New value: " + hoarr.toString(arguments[i]));
    }
  }
}

console.log(firstFunc());

//Arrow functions
//Задача 1
//Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
//function sum() {
//  const params = Array.prototype.slice.call(arguments);
//  if (!params.length) return 0;
//return params.reduce(function (prev, next) { return prev + next; });
//}

/*const sum = () => {
  const params = Array.prototype.slice.call(arguments);
  if (!params.length) return 0;
  return (params.reduce = (prev, next) => {
    return prev + next;
  });
};

console.log(sum(2, 5));*/

//THIS
/*Задача 1
Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
*/
const rectangle = {
  width: 20,
  height: 5,
  getsquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getsquare());

/*Задача 2
Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
*/
const product = {
  price: 10,
  getPrice: function() {
    console.log(this.price);
  },
  discount: "15%",
  getPriceWithDiscount: function() {
    return this.price - this.price * 0.15;
  }
};
product.getPrice();
console.log(product.getPriceWithDiscount());

/* Задача 3
Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
*/
const item = {
  height: 10,
  heightEnlarge: function() {
    return this.height + 1;
  }
};
console.log(item.heightEnlarge());

/*Задача 4
 Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
*/
/*const numerator = {
  value: 1,
  double: function() {
    return this.value * 2
  },
  plusOne: function() {
    return this.value + 1
  },
  minusOne: function() {
    return this.value - 1
  },
}
console.log(numerator.double().plusOne().plusOne().minusOne()); НЕ РАБОТАЕТ*/

/*Задача 5
Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов)
*/
const goods = {
  retail: 15,
  amount: 20,
  totalCost: function() {
    return this.retail * this.amount;
  }
};

console.log(goods.totalCost());

/*Задача 6
Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes*/
let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };

console.log(getSquare.call(sizes));

/*Задача 7
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
*/
let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

//Перебирающие методы массивов
/*Задача 1
На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/
const input = [1, 2, 3, 5, 8, 9, 10];
let result = [];

input.forEach(inputItem => {
  result.push({ digit: inputItem, odd: inputItem % 2 === 0 });
});

console.log(result); //это Вы решили, а не я

/*
Задача 2
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.*/
let arr3 = [12, 4, 50, 1, 0, 18, 40];
function isZero(arguments) {
  return arguments === 0;
}
console.log(arr3.every(isZero));

/*Задача 3
Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
*/
let words = ["yes", "hello", "no", "easycode", "what"];
function wordsLength(arguments) {
  return arguments.length > 3;
}
console.log(arr3.some(isZero));

/*Задача 4
Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки
*/
const arrOfLetters = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];
arrOfLetters.sort(function(a, b) {
  return a["index"] - b["index"];
});
let resultString = arrOfLetters.reduce(function(prevItem, currentItem) {
  return prevItem + currentItem.char;
}, "");
console.log(resultString);

/* Задача 5
Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
*/
const arrOrArr = [[14, 45], [1], ["a", "c", "d"]];
arrOrArr.sort();
console.log(arrOrArr);

/*Задача 6
Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).*/
const arrOfObj = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];
arrOfObj.sort(function(a, b) {
  return a.info.cores - b.info.cores;
});
console.log(arrOfObj);

//DOM
/*1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
 */
const art = document.querySelector("article");
const par = document.querySelector("p");
function isParent(art, par) {
  if (par.parentElement === art) {
    console.log("true");
  }
}

console.log(isParent(art, par));

//2. Получить список всех ссылок, которые не находятся внутри списка ul
var links = document.getElementsByTagName("a");
const resultLinks = Array.prototype.filter.call(
  links, currentLink => !currentLink.closest("ul")
);
console.log(resultLinks);

//3. Найти элемент, который находится перед и после списка ul
var active = document.querySelector("ul");
var prev = active.previousElementSibling;
console.log(prev);
var next = active.nextElementSibling;
console.log(next);

//Манипуляция DOM
/*Дан массив пользователей, создать таблицу.
Условия:
В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
Количество пользователей может быть любым.
Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
*/

const tab = document.querySelector("table");
tab.style.width = "100%";
tab.style.lineHeight = 2;
const fragment = document.createDocumentFragment();
const arr = [
  ["#", "Name", "E-mail", "Balance"],
  [1, "Buckner Osborne", "bucknerosborne@empirica.com", 2853.33],
  [2, "Rosalie Smith", "rosaliesmith@katakana.com", 1464.63],
  [3, "Estrada Davenport", "estradadavenport@ebidco.com", 2823.39]
];
fillTable(tab, arr);
function fillTable(tab, arr) {
  for (var i = 0; i < arr.length; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < arr[i].length; j++) {
      var td = document.createElement("td");
      td.textContent = arr[i][j];
      tr.style.borderBottom = "solid";
      tr.style.borderBottomColor = "grey";
      tr.appendChild(td);
    }
    fragment.appendChild(tr);
  }
}

tab.appendChild(fragment);

//События
/*1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.*/
const btn = document.querySelector("#btn-msg");
btn.addEventListener("click", function(e) {
  alert("Custom message");
});

/*3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.*/
document.body.onclick = e => document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;

