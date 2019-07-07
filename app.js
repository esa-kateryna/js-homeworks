//Задача 1
function multiply() {
  let s = 1;
  if (arguments === undefined) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) s *= arguments[i];
    return s;
  }
}

console.log(multiply());

//Задача 2
function reverse() {
  let str = "abc";
  return (str = str
    .split("")
    .reverse()
    .join(""));
}

console.log(reverse());

//Задача 3
function getCodeStr() {
  let text = "Kate";
  let convertedText = "";
  for (let i = 0; i < text.length; i++) {
    convertedText = convertedText + text.charCodeAt(i) + " ";
  }
  return convertedText;
}

console.log(getCodeStr());

//задача 4
//вообще не понимаю как ее сделать

//задача 5
function getArray() {
  let n = 8;
  let a = [];
  var i = 0;
  do {
    i = i + 1;
  } while (i < n);
  return a.push[i];
}

console.log(getArray());

//Задача 6
function doubleArray() {
  let arr = [1, 2, 3];
  let double = [];
  return (double = arr.concat(arr));
}

console.log(doubleArray());

//Задача 7
function changeCollection() {
  let result = arguments[0].splice(1, 1);

  for (i = 1; i < arguments[0].length; i++) {
    result = result.concat(arguments[0].splice(1, 1));
  }

  return result;
}

console.log(changeCollection([3, 4, 5]));

//Задача 8

//function getUsers([]) {
//let usersArr = [
//{
//name: 'Denis',
//age: 30,
//gender: 'male'
//},
//{
//  name: 'Taras',
//  age: 26,
//  gender: 'male'
//},
//{
//  name: 'Pavlo',
//  age: 35,
//  gender: 'male'
//}
//]
//let resultsArray = [];
//for (usersArr[field] === value) {
//    return (resultsArray.push(user));
//}
//};
//console.log(getUsers([]));

//деструктурирующее присваивание
//задача 1
const { el1: a, el2: b, el3: c, el4: d } = el;
console.log(el1);
function task1() {
  let task1rez = [];
  for (let i = 0; i < arguments.length; i++) {
    return (task1rez[i] = arguments[i].splice(0, 1));
  }
}

console.log(task1({ el }));

//функции высшего порядка
//задача 1

function firstFunc(arr, secondFunc) {
  let hoarr = [1, 2, 3];
  let newString = "";
  newString = "New value: " + hoarr.toString();
  function secondFunc() {
    let newarr = [];
    for (let i = 0; i < hoarr.length; i++) {
      newarr = "New value: " + hoarr(arguments[i]);
      return newarr;
    }
  }
  return newString;
}

console.log(firstFunc());
