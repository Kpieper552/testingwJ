// write function beneath
function getSize(width, lenght) {
    return width * lenght;
}
const Size = getSize(85, 1.70)

console.log (Size)




//exporteren
module.exports = {
getSize: getSize,
};