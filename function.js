//function
function myf(){
    console.log("hashaass");
}
myf();

function sum(x,y){
   s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);
function se(x,y){
    return x+y;
}
let c=se(5,6);
console.log(c);

//modern js

const arrowmul= (a,b)=>{
    console.log(a*b);
}; 


//calculate vowels

function countvowel(str){
    let count=0;

    for(let i=0;i<str.length;i++){
            if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
                count++;
                console.log(str[i]);
              
            }
    }
    console.log(count);
}

countvowel("apnacollege");


//foreach loop in array

let arr=[1,2,3,4,5];
arr.forEach(function printval(val){//callback function
    console.log(val);
});


arr.forEach((val) => {
    console.log(val*val);
});

//map method
let n=[1,2,101,3];
let newn=n.map((val)=>{
    return val*2;
})
console.log(newn);


let newwn= n.filter((val)=>{
return val%2==0;
});
console.log(newwn);

//reduce method

let output= n.reduce((prev,curr)=>{
    return prev+curr;
    });
    console.log(output);//6

    //find the largest value

    let large= n.reduce((prev,curr)=>{
        return prev>curr? prev:curr;
        });
        console.log(large);
        