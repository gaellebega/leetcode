//Anagram this means the word or phrase formed by re arranging the letters to form a  different word or phrase using all the original letters once
//example "anagram"=>"nagram" true
//"rat"=>"car"  false

const isAnagram = function (s,t){
s=s.split("").sort().join("");
t=t.split("").sort().join("");
return s===t;
}
