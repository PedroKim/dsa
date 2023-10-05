const mostFrequentChar = (s) => {
    // let maxChar, maxCount  = 0;
    // for (let i = 0; i < s.length; i++) {
    //   const char = s[i];
    //   let charCount = 0;
    //   for (let j = i + 1; j < s.length; j++) {
    //     if (char === s[j]) charCount++;
    //   }
    //   if (charCount > maxCount) {
    //     maxCount = charCount;
    //     maxChar = char;
    //   }
    // }
    // return maxChar;
    const count = {};
    
    for (let char of s) {
      if (!(char in count)) count[char] = 0;
      count[char]++;
    }
    
    let best = null;
    for (let char of s) {
      if (best === null || count[char] > count[best]) {
        best = char;
      }
    }
    
    return best;
  };