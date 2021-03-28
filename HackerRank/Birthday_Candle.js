//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    // Write your code here
    const maxHeight = Math.max(...candles);
    const resultArr = candles.filter(el => el === maxHeight);
    return resultArr.length;
}
