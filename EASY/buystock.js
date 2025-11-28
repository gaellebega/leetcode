function maxProfit(prices){
  //this is the maximum profit we will have at this point
let grobalProfit=0;
//so that it never go beyond that is why we have used -1
for(let i=0;i<prices.length;i++){
  for(let i=i+1;i<prices.length;j++){
    const currentProfit = prices[j] - prices[i];
    //this means if the current profit is greater then the global profit then the global profit is equal to the currentProfit
    //the grobal profit is the maximum profit we can have
    if(currentProfit >grobalProfit) grobalProfit =currentProfit;
  }
}
return grobalProfit;
}
//this above function is about buying the stock