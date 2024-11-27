//for loop
for(let i=1;i<=5;i++){
    console.log("i am hasan");
}

//while
let i=1;
while(i<=5){
    console.log("hasan");
    i++
}

//do_while
do{
    console.log("ony");
    i++;
}while(i<=5);

//for_of
let str="hasan ony";

for(let i of str){
    console.log(i);
}

//for_in

let student={
    name: "ony",
    Age:24,
    cgpa:3.4,
    ispass:true,
};
for(let key in student){
    console.log(key,student[key]);
}






//strings


let s="hasan ony";
let a=s.length;
console.log(a);

let obj={
    item:"pen",
    price:10,
};

console.log("the cost of",obj.item,"is",obj.price,"taka");//type1 print
let output=`the cost of ${obj.item} is ${obj.price} taka`;//type2
console.log(output);

//string builtin from w3school