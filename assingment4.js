// this function will return multiplication, added, divided and minus  number.
function mindGame(game) {
    if (typeof game !== 'number') {
        return "please enter number"
    }
    const multiplication = game * 3;
    const added = multiplication + 10;
    const dived = added / 2;
    const minus = dived - 5;
    return minus;

}


// this function will return even or odd numbers.
function evenOdd(text) {
    if (typeof text !== 'string') {
        return "please enter string"
    }
    let textLength = text.length;
    if (textLength % 2 === 0) {
        return 'even';
    }
    return 'odd'

}


// this function will works finding less or greater then seven.
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return "please enter number"
    }
    const element = number - 7;
    if (number < 7) {
        return element;
    }
    else {
        const multiplication = number * 2;
        return multiplication;
    }
}



// this function will works finding bad data in array.
function findingBadData(badData) {
    if (Array.isArray(badData) !== true) {
        return "please enter a array"
    }
    let count = 0;
    for (let i = 0; i < badData.length; i++) {
        let element = badData[i];
        if (element < 0) {
            count = count + 1;
        }
    }
    return count;
}



//this function will works converting gems to Diamond.
function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number') {
        return "please enter number"
    }
    const firstFriend = gems1 * 21;
    const secondFriend = gems2 * 32;
    const thirdFriend = gems3 * 43;
    const totalGems = firstFriend + secondFriend + thirdFriend;
    if (totalGems > 1000 * 2) {
        const total = totalGems - 2000;
        return total;
    }
    else {
        return totalGems;
    }
}


