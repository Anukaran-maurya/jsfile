// let a =[10,20,30];
// let b =[30,10,60];
// let c =[10,60,20];


// let arr=[10,20,30,40,50,60,70];
// // console.log(arr.indexOf(30));
// console.log(arr.slice(0,2));
// let a = arr.slice(0,2);
// console.log(a.reverse())

// console.log(arr.slice(2,4));
// let b = arr.slice(2,4);
// console.log(b.reverse())


// console.log(arr.slice(4,6));
// let c = arr.slice(4,6);
// console.log(c.reverse())


// console.log(arr.slice(6,7))
// let d = arr.slice(6,7);
// console.log(d.reverse())

// const = a.concat(b,c,d)





// console.log(arr.reverse());


// for (i=1;i<=5; i++)
// {
//     document.write(i)
// }


// var i=1;
// while(i<=5)
// {
//    document.write(i+"</br>");
//    i++;
   
// }

// let arr1 =[10,20,30,40,50,60,70];
//console.log(arr1);
//console.log(arr1.join(" "))

// arr1.forEach((ele ,i,vishal) => {
//     console.log(arr1)



//filtter
// let filteredArr = arr1.filter((ele , i ,ar) => {
//     return ele>40;

// });

// console.log(filteredArr);


//FIND METHOD
// let filteredArr = arr1.find((ele , i ,ar) => {
//     return ele>40;

// });

// console.log(filteredArr);


// let reducedArr =arr1.reduce((acc , curval) =>{
// return acc + curval 

// },0);
// console.log(reducedarr);


let arr2 = [20, 50 , 60 , -7 , -7 , -80 ,90 ,-100 ,150];
let a = arr2.filter((ele ) => ele >= 0 ).reduce ((a,b) => a+b) 