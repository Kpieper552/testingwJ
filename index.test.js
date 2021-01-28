

test('getSize() function multiply the sum of width and length',() =>{

// arrange
const width = 80;
const length = 1.65;
// act
const sum = getSize(width, length);
// assert
expect(sum).toBe(132);
   });



// importeren
const getSize = require("./index").getSize;
// hh voor meerdere function