//Задача 1
function multiply() {
  let s = 1;
  if (arguments === undefined) {
    return 0;
  } else {
    for (var i = 0; i < arguments.length; i++) s *= arguments[i];
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
