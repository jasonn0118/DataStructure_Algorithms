/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Naive solution: using nested loop - but it's not efficient, O(n^2)
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (maxProfit < prices[j] - prices[i]) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }

  return maxProfit;
};

// 2nd approach: using one loop
var maxProfit2 = function (prices) {
  let maxProfit = 0;
  let lowestNum = prices[0];
  if (prices.length === 1) {
    return 0;
  }

  for (let i = 1; i < prices.length; i++) {
    if (lowestNum > prices[i]) {
      lowestNum = prices[i];
    } else {
      if (maxProfit < prices[i] - lowestNum) {
        maxProfit = prices[i] - lowestNum;
      }
    }
  }
  return maxProfit;
};
