const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    
    const counter = {};
    
    for (let char of s1) {
      if (!(char in counter)) counter[char] = 0;
      counter[char]++;
    }
    
    for (let char of s2) {
      if (!counter[char]) return false;
      counter[char]--;
    }
    
    for (let char in counter) {
      if (counter[char] !== 0) return false;
    }
    
    return true;
  };
  