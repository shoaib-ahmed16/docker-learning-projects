let arr=[1,2,3,4,5,6]
arr.push(10);
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}let name2="hello";
let strArr=name2.split("");
for(let i=0;i<strArr.length;i++){
  console.log(strArr[i]);
}
let newStr=strArr.join(" , ");
console.log(newStr);
console.log(newStr.substring(4,20));

