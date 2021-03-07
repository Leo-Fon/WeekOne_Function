//TASK 1
function firstArgument (Hello) {
  return Hello;
}

//TASK 2
function sumWithPlus (a = 10, b = 5) {
  return a + b;
}

function sumPlus (a, b = 100) {
  return a + b;
}

//TASK 3
function resFn(fn) {
  return fn();
}

//TASK 4
function retCount(number = 0) {
  return () => ++number;
}

//TASK 5
function retArray () {
  return [...arguments];
}

//TASK 6
function bindFunction(fn, ...args) {
  return fn.bind(null, ...args);
}

