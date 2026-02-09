// function print(){    //callback fn
//     console.log("hello studentss!!")
// }

// function greet(num){   //higher order fn
//     console.log("Welcome to my class!!")
//     num()
// }

// greet(print)

// function greet(num){   //higher order fn
//     console.log("Welcome to my class!!")
//     settimeout(()=> {
//         console.log("Inside setTimeout")
//         let firstName="alisha"
//         num(firstName)
//     },2000);
// }

// console.log("Starting homework...");
// setTimeout( ()=> {
//     console.log("Homework done!");
//     console.log("getting ready to go out...");

//     setTimeout( ()=> {
//         console.log("Going to the playground!");
//     },1000)

// })


// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const li=document.createElement('li')
//     li.innerText=input.value
//     list.appendChild(li)
//     input.value=""
// })

const p= new Promise(function(resolve,reject))
setTimeout(()=>{
    let done=false;
    if(done){
        resolve({name:"alex",age:34})


    }
})