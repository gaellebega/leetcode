//inbilt loop Methods

//Map
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map(num=>num*2);
// const double2=numbers.filter(n>2);
// console.log(double);
// console.log(double2);
//gives a clear loop compared to for or whileloop

const upperFruit =fruits.map(fruit=>fruit.toUpperCase());

//to use the spread operator
const nums1=[1,2,3,4,5]
const nums2=[6,7,8,9,0];
const finalNums=[...nums1,...nums2];
console.log(finalNums);
