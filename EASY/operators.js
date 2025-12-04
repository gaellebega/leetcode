const { use } = require("react");

function spreadOp(...nums){
return nums;
}
console.log(spreadOp(1,2,3,4))//[1,2,3,4]
//spread operator to merge
//spread to copy
const num1=[1,2,3,4]
const num2=[4,5,6,7];
const finalNums=[...num1,...num2];
console.log(finalNums);

const nums=[1,2,3,4,5];

const anothernums2=[7,8,9]
const merge=nums.concat(anothernums2);
console.log(merge);

const elements1=[0,9,8,7,6];
const elements2=[5,4,3,2,"mukamana"]
const elements3=["muhawe","murife"]
console.log(elements1.concat(elements2,elements3))

const newarr = [...elements1,...elements2,...elements3,20];
console.log(newarr);

const answer=elements1.slice(0,4);

console.log(answer);

let useSlice=["uwase","kanjogera","mukundwa","mustsh"];
console.log(useSlice.slice(3))//this means start at the index 3 then give all the remainings
console.log(useSlice.slice(-2))//this means it will take the last 2
console.log(useSlice.slice(-1,-2))//this is gonna give the only last index

const bigSentence="ohhthisisit";
console.log(bigSentence.slice(2,5))

console.log(useSlice.slice(3,1))