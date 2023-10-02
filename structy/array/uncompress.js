/*
    Uncompress
    Write a function, uncompress, that takes in a string as an argument. The input string 
    will be formatted into multiple groups according to the following pattern:
        <number><char>
        for example, '2c' or '3a'.
    The function should return an uncompressed version of the string where each 'char' of a group
    is well-formed according to the previously mentioned pattern.

    Test cases:
        uncompress("2c3a1t");   // -> 'ccaaat'
        uncompress("4s2b");     // -> 'ssssbb'
        uncompress("2p1o5p");   // -> 'ppoppppp'
        uncompress("3n12e2z");  // -> 'nnneeeeeeeeeeeezz'
        uncompress("127y");     // -> 'yyyy....y'
*/

const uncompress = (s) => {
    
};

console.log(uncompress("2c3a1t"));   // -> 'ccaaat'
console.log(uncompress("4s2b"));     // -> 'ssssbb'
console.log(uncompress("2p1o5p"));   // -> 'ppoppppp'
console.log(uncompress("3n12e2z"));  // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y"));     // -> 'yyyy....y'