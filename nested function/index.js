// function parent(){
//     let a =30;

//     function child(){
//         let b= 50

//         function gchild(){
//             let c =40;
//             console.log( a,b,c);
            
//         }
//         gchild();
//     }child();
//  }parent();\

function* fun(a){

    yield a+20;
    yield a+39;
    yield a+56;
    yield a+213;


}
let result =fun(10);
console.log(result.next().value);
