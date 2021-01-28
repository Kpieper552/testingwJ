//solution:
function getSize(width, length) {
    return width * length;
}
const Size = getSize(85, 1.70)

console.log(Size)




//exporteren
module.exports = {
getSize: getSize,
};