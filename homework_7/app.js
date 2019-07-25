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
  links,
  currentLink => !currentLink.closest("ul")
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
document.body.onclick = e =>
  (document.querySelector("#tag").textContent = "Tag: " + e.target.tagName);

// Форма
// Список задач
const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095c4e88e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  }
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // UI Elements
  const tasksList = document.querySelector(".tasks-list-section .list-group");
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  const allTasksBtn = document.createElement("button");
  allTasksBtn.textContent = "Show all tasks";
  allTasksBtn.classList.add("btn", "btn-success", "mb-4");
  tasksList.insertAdjacentElement("beforebegin", allTasksBtn);

  const uncompletedBtn = document.createElement("button");
  uncompletedBtn.textContent = "Uncompleted tasks";
  uncompletedBtn.classList.add("btn", "btn-danger", "ml-4", "mb-4");
  tasksList.insertAdjacentElement("beforebegin", uncompletedBtn);

  renderTasks();
  form.addEventListener("submit", onFormSubmitHandler);
  tasksList.addEventListener("click", onDeleteHandler);
  tasksList.addEventListener("click", onCompleteHandler);
  allTasksBtn.addEventListener("click", reviewAllTasks);
  uncompletedBtn.addEventListener("click", uncompletedTasks);

  // Functions
  function renderTasks() {
    const fragment = document.createDocumentFragment();
    Object.values(objOfTasks).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    tasksList.appendChild(fragment);
  }

  //Если массив с задачами пустой то под формой нужно выводить сообщение об этом. НЕ РАБОТАЕТ
  function noTasks() {
    if (tasks === []) {
      const section = document.querySelector(".tasks-list-section");
      const fragment = document.createDocumentFragment();
      const div = document.createElement("div");
      div.classList.add(
        "card-body",
        "bg-success",
        "text-center",
        "font-weight-bold",
        "text-white"
      );
      div.textContent = "Невыполненных заданий нет";
      fragment.appendChild(div);
      section.appendChild(fragment);
    }
  }
  //При нажатии на кнопку выводить на экран все задачи - НЕ РАБОТАЕТ
  function reviewAllTasks(e) {
    const list = document.querySelector("ul");
    let allTasks = document.querySelectorAll(".list-group-item");
    list.appendChild(allTasks);
  }

  //При клике на кнопку выводить все незавершенные задачи - НЕ РАБОТАЕТ
  function uncompletedTasks(e) {
    return arrOfTasks.filter(task => task.completed === false);
  }

  function listItemTemplate(task) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap"
    );
    li.setAttribute("data-task-id", task._id);

    const span = document.createElement("span");
    span.textContent = task.title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const article = document.createElement("p");
    article.textContent = task.body;
    article.classList.add("mt-2", "w-100");

    const completBtn = document.createElement("button");
    completBtn.textContent = "Completed";
    completBtn.classList.add("btn", "btn-success", "ml-auto", "complete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    li.appendChild(completBtn);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Пожалуйста введите title и body");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    tasksList.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`
    };

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }

  function onDeleteHandler(e) {
    const { target } = e;
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      parent.remove();
      delete objOfTasks[id];
    }
  }
  //В каждый элемент li добавить кнопку которая будет делать задачу выполненой. завершенные задачи должны быть подсвечены любым цветом.
  function onCompleteHandler(e) {
    const { target } = e;
    if (target.classList.contains("complete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      parent.classList.add("list-group-item-success");
    }
  }
})(tasks);

//Замыкания
/*Задача 1
Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.
*/
function minusMaker(value) {
  let b = value;
  return function(num) {
    return (b -= num);
  };
}
const exmp = minusMaker(0);
console.log(exmp);

/*Задача 2
Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами*/
function multiplyMaker(value) {
  let a = value;
  return function(num) {
    return (a *= num);
  };
}
const example = multiplyMaker(2);
console.log(
  example
); /*в консоле вызываем example(какое-то число) нужное количество раз и получаем в результате перемножение с предыдущим результатом*/

/*Задача 3
Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
*/
const myStr = (function(value) {
  let someString = value;

  function setString(newString) {
    if (typeof newString === "number") {
      return (someString = newString.toString());
    }
    if (newString.length === 0) {
      return (someString = "");
    }
    return (someString = newString);
  }

  function getString() {
    return someString;
  }

  function getStringLength() {
    return someString.length;
  }

  function getReversString() {
    return someString
      .split("")
      .reverse()
      .join("");
  }

  return {
    setString,
    getString,
    getStringLength,
    getReversString
  };
})();

/*Задача 4
Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
*/
const myCalc = (function(value) {
  let z = value;

  function setValue(newnum) {
    return (z = newnum);
  }

  function getAdded(num) {
    return (z += num);
  }

  function getMult(num) {
    return (z *= num);
  }

  function getSubtraction(num) {
    return (z -= num);
  }

  function getDivision(num) {
    z /= num;
    return z.toFixed(2);
  }

  function getExponentiation(value) {
    return (z = value * value);
  }

  function getResult(value) {
    return z.toFixed(2);
  }

  return {
    setValue,
    getAdded,
    getMult,
    getSubtraction,
    getDivision,
    getExponentiation,
    getResult
  };
})();
