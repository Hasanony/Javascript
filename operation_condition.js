//operators
//arithmatch operator(+,-,*,/)
/*
.Modulus(%)
.Exponentition(a**b)a^b
.increment(++)
decrement(--)
*/

let a=5;
let b=2;


console.log(a,b);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

/*unary operators
++,--*/
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);

/*assignment operators
=,+=,-=,*=,%=,**=,/=
*/
a+=4;

console.log(a);

a**=4;

console.log(a);
/*comparison operators
==,!=,===,!==,<,>,<=,>=
*/
console.log(a==b);//true/false
console.log(a>=b);
console.log(a===b);//its also check the datatype also


/*logical operators
&&,||,!
*/
let c1=a>b;
let c2= a===6;
console.log(c1&&c2);





//conditional statements

let year=26;
if(year>18){
    console.log("can vote");
}else if(year<25){
    console.log("can get driving license");
}else{
    console.log("can't vote")
}
//ternary operators
let result=year>18?"adult":"not adult";
console.log(result);