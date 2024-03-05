function maxProfit(prices: number[]): number {
    const n = prices.length;
    let profit = 0;
    for(let i=1; i<n; i++) {
        const current = prices[i]
        const previous = prices[i-1]
        if(current > previous) {
            profit += current - previous;
        }
    }
    return profit;
};

console.log(maxProfit([1,7,1,2,5]));
