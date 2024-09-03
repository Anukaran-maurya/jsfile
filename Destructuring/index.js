// let arr = [10,20,30,40,50,[30,56]];
// console.log(arr[4][0]);
// let =


//array destructuring
// let arr = [10 ,30 ,50 ,60, 70 ,80 ,90];
// let [a,b,c,d,e,f,g]=[...arr]

// console.log(f)

//object destrutuing


// let emp = {
//     name:"akash",
//     age:23,
//     id:34,
//     dept:"webdep",
//     skills:{
//         tecnicalskills:{
//             frontEnd:["html","css","js"],
//             backend:["node","express"],
//             cloud : ["aws " ,"azure"]
//         },
//     },
// };

// let {skills:{tecnicalskills:{frontEnd:[a,b]}}}={...emp}
// console.log(b);


let arr = [10,
    30,
    {
        empname:"prasad",
        skills:[
    {
    technicalskills:{
        frontend : ["html","css"],
        backend : ["node","express","mogodb"],
        cloud:["aws","azure"]
    },
},
{
    softskills:["reading","gaming"]
}
],
},
]
let {skills:[{a,b:{backend:[a,b,c]}}]}={...arr}
console.log(c);
