const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const asyncSum = (...params)=> Promise.resolve(sum(...params))
const asyncSubtract = (...params) => Promise.resolve(subtract(...params));

module.exports = {
    sum,
    subtract,
    asyncSum,
    asyncSubtract,
}