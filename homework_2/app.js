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
function getInfo({ name = 'Unknown', partners } = {}) {
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

const sum = () => {
  const params = Array.prototype.slice.call(arguments);
  if (!params.length) return 0;
  return (params.reduce = (prev, next) => {
    return prev + next;
  });
};

console.log(sum(2, 5));
