// // function print(){    //callback fn
// //     console.log("hello studentss!!")
// // }

// // function greet(num){   //higher order fn
// //     console.log("Welcome to my class!!")
// //     num()
// // }

// // greet(print)

// // function greet(num){   //higher order fn
// //     console.log("Welcome to my class!!")
// //     settimeout(()=> {
// //         console.log("Inside setTimeout")
// //         let firstName="alisha"
// //         num(firstName)
// //     },2000);
// // }

// // console.log("Starting homework...");
// // setTimeout( ()=> {
// //     console.log("Homework done!");
// //     console.log("getting ready to go out...");

// //     setTimeout( ()=> {
// //         console.log("Going to the playground!");
// //     },1000)

// // })


// // const input=document.querySelector("#task")
// // const btn=document.querySelector(".btn")
// // const list=document.querySelector(".list")

// // btn.addEventListener('click',(e)=>{
// //     e.preventDefault()
// //     const li=document.createElement('li')
// //     li.innerText=input.value
// //     list.appendChild(li)
// //     input.value=""
// // })

// // const p= new Promise(function(resolve,reject))
// // setTimeout(()=>{
// //     let done=false;
// //     if(done){
// //         resolve({name:"alex",age:34})


// //     }
// // })



// // orderFood().then(data)=




// async function getData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products")
//         console.log(response.ok)
//         if(response.ok===false)throw new Error("Data not found")
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data not found")
//     }
// }
// getData()



// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
//   for (let index = 1; index < 4; index++) {
//     yield index;
//   }
//   let i = 1;
//   while (true) {
//     yield i;
//     i++;
//   }
// }

// const gen = generator();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }


// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(1,2,3))  
// // currying is a technique in functional programming where a function 
// // with multiple arguments is transformed into a sequence of functions that each take a single argument.
// // It allows you to create new functions by partially applying arguments to an existing function.

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }}
//     constfirstAdd = add(1);
//     const secondAdd = firstAdd(2);
//     const result = secondAdd(3);
//     console.log(result)  // Output: 6




