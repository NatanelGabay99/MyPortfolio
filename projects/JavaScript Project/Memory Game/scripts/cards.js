import { random, shuffle } from './utils.js'

export function createGameImageArray(n) {
    //given 8 elements-> 4 different cards 
    let numPairs = n / 2;
    let arr = [];
    while (arr.length < numPairs) {
        const index = random(1, 22);
        const src = `images/mlb_${index}.jpg`;
        if (!arr.includes(src)) {
            arr.push(src);
        }
    }

    //concat
    arr = arr.concat(arr); //[1, 2, 3, 4, 1, 2, 3, 4]=>[1, 3, 1, 2, 4, 3, 2, 4]
    //shuffle
    arr = shuffle(arr);

    return arr;
}