const pairProduct = (numbers, targetProduct) => {
    const divisors = {};
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (divisors[num] !== undefined) {
        return [divisors[num], i];
      } else {
        divisors[targetProduct/num] = i;
      }
    }
  };