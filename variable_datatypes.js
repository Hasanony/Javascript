/*print*/
console.log("hasan");

/*variable*/
h="hasan";//string
var age=25;
let flow=3.5;//it is good use
const flw=3.5;
isfollow=true;
isfollow=false;
x=null;
y=undefined;
console.log(h);
console.log(age);
console.log(flow);
console.log(h, age, flow);

/*blog*/
{
    const flw=3.5;
    let flow=3.5;//it is good use
}
{
    const flw=3.5;
    let flow=3.5;//it is good use
}

/*data types
1. string
2.number
3.boolean
4.undefined
5.null
6.bigInt
7.symbol
*/

/*objects*/
const student={
    name:"hasan",
    id:56,
    cgpa:3.8,
    age:23,
    isPass:true,
};
console.log(student);
console.log(student["name"]);
console.log(student["age"]);
student.age=student["age"]+1;
console.log(student.age);
console.log(student.cgpa);
console.log(student.isPass);