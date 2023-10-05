const pairSum = (numbers, targetSum) => {
    const diff = {};
    for (let i = 0; i < numbers.length; i++) {
      if (diff[numbers[i]] !== undefined) {
        return [diff[numbers[i]], i];
      } else {
        diff[targetSum - numbers[i]] = i;
      }
    }
  };