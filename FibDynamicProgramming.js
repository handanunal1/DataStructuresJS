//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations2 = 0;
function fibonacci(n) { //O(2^n)
calculations2++;
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations = 0;
function fibonacciMaster() { //O(n)
  let cache = {};
  return function fib(n) {
  calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}


// All we do is add our result to a hash table

const fasterFib = fibonacciMaster();
fibonacci(10);
console.log("DP " + fasterFib(10));
console.log("We did  "+ calculations + " calculations");
console.log("We did  "+ calculations2 + " calculations");
