function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


function compareArrays(arr1, arr2) {

    if ((arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index])) {
      return true;
    } else {
      return false;
    }
  }



function memorize(fn, limit) {
  return function (...args) {
    const memory = [];
    const find = memory.find((element) => compareArrays(memory[element].args, args));
    if (find) {
      console.log('AAAAA')
      return find.result;
    }
    memory.unshift({args: args, result: sum(...args)});
    if (memory.length > limit) {
      memory.pop();
    }
    const result = fn(...args);
    return result;
  }
}  