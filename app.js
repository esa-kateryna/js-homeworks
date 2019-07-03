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
  let convertedText = '';
  for (var i = 0; i < text.length; i++) {
    convertedText = convertedText + text.charCodeAt(i) + ' ';
  }
  return convertedText;
}

console.log(getCodeStr());

//задача 4
//вообще не понимаю как ее сделать

//задача 5
function getArray() {
    let n = 10;
    for (let i = 0; i < n.length; i++) 
      return getArray[i];
}

//Задача 6
function doubleArray() {
  let arr = [1, 2, 3];
  let double = [];
  return double = arr + ',' + arr;
}

console.log(doubleArray());
//Задача 7

//Задача 8