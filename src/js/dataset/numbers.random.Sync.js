const randomNumbersGenerator = (amount) => {
    return [...Array(amount)].map(() => Math.floor(Math.random() * 9));
}

module.exports = randomNumbersGenerator;