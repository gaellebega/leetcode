var fibbo=function(n){
  const arr=[0,1];
  for(i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2]);
  }
  return arr[n];
}
result=fibbo(9);
result=fibbo(4);
console.log(result);

var palindrome=function(x){
  return x=== +x.toString().split("").reverse().join("");

}
response=palindrome(404);
response=palindrome("MOM")
response=palindrome("Mukesha");

console.log(response);


