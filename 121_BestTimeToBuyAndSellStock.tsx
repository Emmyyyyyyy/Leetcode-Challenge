function maxProfit1(prices: number[]): number {
    if (prices.length <= 1) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        console.log('minPrice '+ minPrice);
        const currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
    }
    return maxProfit;
}

console.log(maxProfit1([7,1,5,3,6,4]));
console.log(maxProfit1([2, 4, 1]));
console.log(maxProfit1([3,2,6,5,0,3]));
