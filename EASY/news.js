var findSecondLargest=function(arr){
const uniqueArr=Array.from(new Set(arr));
uniqueArr.sort((a,b)=>b-a);
if(uniqueArr.length>=2){
  return uniqueArr[1]
}
else{
  return -1;
}
}
console.log(findSecondLargest([2,4,6,7,9]))