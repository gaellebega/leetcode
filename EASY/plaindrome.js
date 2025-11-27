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

