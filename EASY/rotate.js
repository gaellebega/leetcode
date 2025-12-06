//rotate array by K times

//for example we have this
//input: nums=[1,2,3,4,5,6,7] rotate by k=3
//we are gonna have this [7,1,2,3,4,5,6]=>[6,7,1,2,3,4,5]=>[5,6,7,5,1,2,3,4]
//so the final output is gonna be this [5,6,7,5,1,2,3,4]

var rotateArrays = function(nums,k){
  //to calculate the size of the array
  //k must be always less than to the array bcz at the end it will lok exact as the same and ewhen it is more than that you will find looping for nothing 
let size=nums.length;
if(k>size){
   k=k%size;
}

//splice is index based so it will start from the index we have if it is 2 it is gonna start from the third element
const rotated = nums.splice(size-k,size);
//the unshift method will return the elemnt that was removed which is 4,5,6 then move them to the first place
nums.unshift(...rotated);
return nums;
}
console.log(rotateArrays([1,2,3,4,5,6],3));
console.log(rotateArrays([1,2,3,4,5,6],7));
//error when they say somthing is not a function that means you are trying to call something that is not defined as a function