const randomNumbers = (amount) => {
    return [...Array(amount)].map(() => Math.floor(Math.random() * 9));
}

module.exports = randomNumbers;