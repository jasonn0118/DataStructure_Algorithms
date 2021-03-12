/**
 * Given a 6X6 2D Array,
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 
 * An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
 * a b c
 *   d
 * e f g
 * 
 * There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, 
 * then print the maximum hourglass sum. The array will always be 6x6.
 * 
 * 
 * Example)
 * -9 -9 -9  1 1 1 
 * 0 -9  0  4 3 2
 * -9 -9 -9  1 2 3
 * 0  0  8  6 6 0
 * 0  0  0 -2 0 0
 * 0  0  1  2 4 0
 * 
 * The 16 hourglass sums are:
 * 
 * -63, -34, -9, 12, 
 * -10,   0, 28, 23, 
 * -27, -11, -2, 10, 
 * 9,  17, 25, 18
 * 
 * The highest hourglass sum is 28
 * 
 * So, the result will be 28.
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let currentArraySum;
    
    for(let row = 0; row < arr.length-2; row++){ 
        for(let col = 0; col < arr.length-2; col++){
           let initialVal = arr[row][col] + arr[row][col+1] + arr[row][col+2] + 
                        arr[row+1][col+1] + arr[row+2][col] + arr[row+2][col+1] + 
                        arr[row+2][col+2];
            if(row === 0 && col === 0) { //initial set up.
                currentArraySum = initialVal;
            }
            if(currentArraySum <= initialVal){ //check the highest value and swap.
                currentArraySum = initialVal;
            }
        }
    }
    return currentArraySum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
