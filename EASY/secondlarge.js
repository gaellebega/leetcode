//you are given an array then you have to find the secind largest number 
//input:[16,35,1,10,34,1]; here the output is gonna be 34 
//input:[10,5,10] output:5

// var secondLargestNumber=function(arr){
// for(let i=0;i<arr.length;i++){
//   result=arr.sort((a,b)=>a-b); //1,1,10,16,34,35,35
//   return arr.length-1;
// }
// }
// console.log(secondLargestNumber([[16,35,1,10,34,35,1]]))
// console.log(secondLargestNumber([[10,5,10]]))

function findSecondLargest(arr){
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a,b)=>a-b);
  console.log(uniqueArr)
 
}
findSecondLargest([16,35,1,10,34,35,1]);