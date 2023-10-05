const intersection = (a, b) => {
    const counter = {};
    const result = [];
    
    for (let num of a) {
      if (counter[num] === undefined) counter[num] = 0;
      counter[num]++;
    }
    
    for (let num of b) {
      if (counter[num] !== undefined) counter[num]++;
    }
  
    for (let num in counter) {
      if (counter[num] > 1) result.push(Number(num));
    }
    
    return result;
    
    // following is using a Set datastructure.
    // const result = [];
    // const setA = new Set(a);
    // for (let num of b) {
    //   if (setA.has(num)) {
    //     result.push(num);
    //   }
    // }
    // return result;
  };