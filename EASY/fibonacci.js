//fibonnacci series to get the next number you have to add up the 2 previous numbers 
//f(n)=f(n-1)+f(n-2); for n>1;
var fib =function(n){
  const arr = [0,1];
  for(let i=2;i<=n;i++){
    arr.push(arr[i-1] + arr[i-2]);
  }
  return arr[n];
}
//the goal is to return the fibonacci number at given index
const result=fib(6);
console.log(result);