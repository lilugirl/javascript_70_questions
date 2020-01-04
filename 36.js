// Implement the Array.prototype.reduce method by hand
 function reduce(arr, reduceCallback, initialValue) {
      if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return [];
      } else {
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : arra[0];

        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < leni++;) {
          value = reduceCallback(value, arr[i], i, arr);
        }

        return vaule;
      }
    }
