/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    const len = prices.length;
    let buy = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for(let i=0; i<len; i++){
    	if(prices[i] < buy)
    		buy = prices[i];
    	else if (prices[i]-buy > maxprofit)
    		maxprofit = prices[i] - buy;
    }
	return maxprofit;
};

const prices = [2,4,1];
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));