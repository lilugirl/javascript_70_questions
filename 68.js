 // Implement a memoization helper function
 function memoize(fn) {
      const cache = {};
      return function (param) {
        if (cache[param]) {
          console.log('cached');
          return cache[param];
        } else {
          let result = fn(param);
          cache[param] = result;
          console.log('not cached');
          return result;
        }
      }
    }

    const toUpper = (str = "") => str.toLocaleLowerCase();
    const toUpperMemoized = memoize(toUpper);

    toUpperMemoized("abcdef");
    toUpperMemoized("abcdef");
