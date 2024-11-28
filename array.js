//array
let marks=[90,23,43,92];
console.log(marks);
marks.unshift(56);//add in first
marks.push("hasan");//add in last
console.log(marks);
marks.shift();//remove from first
let d=marks.pop();//remove from last
console.log(d);
console.log(marks);

//looping array
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}

console.log(sum);
let avg=sum/marks.length;//average marks
console.log(avg);





for(let mark of marks){
    console.log(mark);
}
//offer
let offer=10;
for(let i=0;i<marks.length;i++){
    m=marks[i]/offer;
    marks[i]=marks[i]-m;
    console.log(marks[i]);
 
}
