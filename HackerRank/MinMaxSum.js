//https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    //Array sort first.
    arr.sort();
    const maxSum = arr.reduce((a,b)=> a+b, -arr[0]);
    const minSum = arr.reduce((a,b)=> a+b, -arr[4]);

    console.log(minSum +" " + maxSum)
}