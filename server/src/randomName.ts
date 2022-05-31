const randomName = () => {
    let result = '';
    let first = '';
    let char = '';
    let num = '';
    let firstLetter = 'AEIOUaeiou';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    
    first += firstLetter.charAt(Math.floor(Math.random() * firstLetter.length));

    for (let i = 0; i < 4; i++) {
        char += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    for (let i = 0; i < 2; i++) {
        num += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
    result += `${first}${char}-${num}`;
    return result;
};

module.exports = randomName;