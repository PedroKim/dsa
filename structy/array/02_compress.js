/*
    Compress
    Write a function, compress, that takes in a string as an argument. The function should
    return a compressed version of the string where consecutive occurences of the same characters
    are compressed into the number of occurences followed by the character. Single character
    occurences should not be changed.
        'aaa' compresses to '3a'
        'cc' compresses to '2c'
        't' should remain as 't'
    You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
    let result = "";
    let i = 0;

    while (i < s.length) {
        const char = s[i];
        let count = 0;

        while (char == s[i]) {
            count++;
            i++;
        }

        if (count > 1) result += count;
        result += char;
    }

    return result;
};

console.log(compress('ccaaatsss')); // => '2c3at3s'
console.log(compress('ssssbbz'));   // => '4s2bz'
console.log(compress('ppoppppp'));  // => '2po5p'
console.log(compress('nnneeeeeeeeeeeezz')); // => '3n12e2z'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'));
// => '127y'






















































// const compress = (s) => {
//     const output = [];
//     let i = 0, j = 0;
    
//     while (j < s.length) {
//       const char = s[i];
//       let count = 0;
      
//       while (s[j] === char) {
//         j++;
//         count++;
//       }
      
//       if (count > 1) output.push(count);
//       output.push(char);
      
//       i = j;
//       count = 0;
//     }
    
//     return output.join('');
//   };