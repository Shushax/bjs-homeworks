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

      if (arr1.length !== arr2.length) {
        return false;
      } else {
        const result = arr1.every((element, index) => element === arr2[index]);
        if (result === true) {
        return true;
        } else { 
        return false;
        }
      }
      
    }

    function memorize(fn, limit) {
      const memory = [];

      return function result(...args) {
        const find = memory.find(() => compareArrays(memory.args, ...args));
        if (find) {
          return memory[index].result;
        } else {
          memory.push({args: sum, result: sum(...args)});
          if (memory.length > 10) {
            memory.pop();
          }
          return sum(...args);
        }
      }
    }  