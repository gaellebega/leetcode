//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twosum=function(nums,target){
  for(let a=0;a<nums.length;a++){
    for(let b=a+1;b<nums.length;b++){
      if(nums(a)+nums(b)===target){
        return [a,b];
      }
    }
  }
}
console.log(twosum([2,7,11,15],9));


//given an integer and tellif it is a palindrome or not
//palindrome number is a number which reads the same when you read backwards or frontwards

const isPalindrome=function(x){
  //reverse the array in the place like just the way it is
  //121  => "121" =>["1","2","1"]  =>  ["1","2","1"]

  return x < 0 ? false:x=== +x.toString().split("").reverse().join();
}
const res =isPalindrome(19);
console.log(res);


const thisApalindrome=function(str){
return str === str.split("").reverse().join("");
}
const response=thisApalindrome("MOM");
console.log(response);

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

//recrusion


//Anagram this means the word or phrase formed by re arranging the letters to form a  different word or phrase using all the original letters once
//example "anagram"=>"nagram" true
//"rat"=>"car"  false

const isAnagram = function (s,t){
s=s.split("").sort().join("");
t=t.split("").sort().join("");
return s===t;
}
