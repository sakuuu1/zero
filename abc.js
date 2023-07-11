// var a="hello";
// console.log(a);
// console.log(typeof(a));
// console.log(10+30);
// console.log(10+"20");
// console.log(10+"a");
// console.log(10+a);
// console.log(10+b);
// console.log(10-"5");
// console.log(20-19);
// console.log("Hello"-"nulli");
// console.log(true+true);
// console.log("true"+"true");
// console.log(false+false);
// var b=null;
// console.log(typeof(b));
// console.log(c+c);
// var c=90;
// var d="shipra";
// console.log(isNaN(c));
// console.log(isNaN(d));
// console.log(NaN===NaN);
// console.log(Number.NaN==NaN)
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));
// var e=10;
// var f=30;
// console.log("is both are equal"+e==f);
// console.log(e!=f);
// var year=2020;
// if(year%4===0 && year%100!=0 || year%400==0)
// console.log("leap");
// else
// console.log("not leap");
// function ab(){
//     console.log("quote");
//     return 10+29;
// }
// ab();
// console.log(ab())
// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,28);
// sum();
// const c=function(a,b){
// return a+b;
// }
// console.log(c(20,30));
// function an(){
//     var a=10;
//     var b=12;
//     if(b==12){
//         console.log(a);
//     }
// }
// an();
// console.log(a);
// function ab(){
// var a=10;
// if(a==10){
//     let c=20;
//     console.log(c);
// }
// console.log(c)
// }
// ab();
// for(var a=1;a<=10;a++){
//     console.log(2*a);
// }
// const a=(c,d)=>{
// console.log(c+d);
// }
// a(10,20);
// const a=(c,d)=>{
//     return c+d;
//     }
// console.log(a(10,20));
// var a=["s","h","i","p","r"];
// for(let ele of a){
//     console.log(ele);
// }
// a.forEach(function(ind,ele,arr){
// console.log(arr)
// })

// let score=30
// let to=score==30
// console.log(to)

// let obj={
//     java:40,
//     fulls:60,
//     total: function abc(a){
//         console.log(obj.java+obj.fulls+a);
//     }
// }
// obj.total(10);

// let arr=[1,2,3,5]
// let n=arr.map((ele,ind,a)=>{
//     return ele>2
// })
// console.log(n)


// let arr=[12,45,64,0,3,7,59,79];
// var b=arr.filter((ele)=>ele>10).reduce((z,ele)=>z+=ele)
// console.log(b)


// const n=arr.reduce((a,b)=>{console.log(a+b)
// })
// console.log(n)

// function a(){
//     console.log('inside a')
//     function b(){
//         console.log('inside b')
//     }
//     return b
// }
// // let c=a()
// a()()

// let arr=[1,2,3,4,5,'hello',true]
// var arr1=[];
// var arr2=[];
// var arr3=[];
// for(let i of arr){
// if(typeof i=='number'){
//     arr1.push(i)
// }
// else if(typeof i=='string'){
//     arr2.push(i)
// }
// else{
//     arr3.push(i)
// }
// }
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)


// let arr=[1,2,3,4,5,'hello',true]
// function getString(item){
//     return typeof item==='string'
// }
// function getNumber(item){
//     return typeof item==='number'
// }
// function get(arr,fun1){
//     let res=[]
//     for(let item of arr){
//         if(fun1(item)){
//             res.push(item)
//         }
//     }
//     return res;
// }
// console.log(get(arr,getString)) 




// closures-it provide reference of the variable agar koi inner func outer func k variables ko access krna chahta hai to vo kr skta hai
// function outer(){
//     let user="gla"
//     function inner(){
//         console.log(user)
//     }
//     return inner
// }
// let fun1=outer()
// func1()

//asynchronous programming
//event loop checkr krta hai stack empty hai ya nhi agar empty hota hai to vo us data ko push kr deta hai queue se stack mai run krwane k liye
// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },4000)
// setTimeout(()=>{
//     console.log("10")
// },0)
// console.log("3")
// console.log("4")



// function step1() {
//     setTimeout(()=>{
//         console.log("image selected")
//         return "Image"
//     },4000)
   
// }
// function step2(img1){
//     setTimeout(()=>{
//         console.log("filter applied "+img1)
//         return 'filterImage'
//     },3000)
// }
// function step3(img2){
//     setTimeout(()=>{
//         console.log("caption added "+img2)
//         return 'captionImage'
//     },2000)
// }
// function step4(img3){
//     setTimeout(()=>{
//         console.log("uploaded done "+img3)
//     },2000)
// }
// let image=step1()
// let filteredImage=step2(image)
// let captionImage=step3(filteredImage)
// step4(captionImage)







// function step1(step2){
//     setTimeout(()=>{
//         const img1="img1";
//         console.log("here is the image "+img1);
//         step2(img1);
//     },2000)
// }
// function step2(img1,step3){
//     setTimeout(()=>{
//         const img2="img2 "+img1
//         console.log("image filtered "+img2)
//         step3(img2);
//     },3000)
// }
// function step3(img2,step4){
//     setTimeout(()=>{
//         const img3="img3 "+img2;
//         console.log("here is the caption "+img3)
//         step4(img3);
//     },1000)
// }
// function step4(img3,step4){
//     setTimeout(()=>{
//         const img4="img4 "+img3
//         console.log("finally uploaded "+img4)
//         step4(img4);
//     },2000)
// }
// step1((img1)=>{
//     step2(img1,(img2)=>{
//         step3(img2,(img3)=>{
//             step4(img3,(img4)=>{
//                 console.log(" "+img4)
//             })
//         })
//     })
// });





// function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             var img='img1';
//         console.log("here is the image "+img);
//         resolve(img);
//         // reject("image is blur")
//         },3000)
//     })
// }
// function step2(img){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             var img1=img+" img2";
//             console.log("here is the filtered image "+img1);
//             resolve(img1);
//         },2000)
//     })
// }
// function step3(img1){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             var img2=img1+" img3"
//             console.log("here is the caption image "+img2)
//             resolve(img2)
//         },2000)
//     })
// }
// function step4(img2){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             var img3=img2+" img4";
//             console.log("here is the final image "+img3)
//             resolve(img3);
//         },3000)
//     })
// }
// step1()
// .then((img)=>{
// return step2(img)
// })
// .then((img1)=>{
// return step3(img1)
// })
// .then((img2)=>{
// return step4(img2)
// })
// .then((img3)=>{
// console.log(img3)
// })
// .catch((error)=>{
// console.log(error)
// })
// .finally(()=>{
//     console.log("got the image")
// })

// async function orderPizza(){
//     const img1=await step1();
//     const img2=await step2(img1);
//     const img3=await step3(img2);
//     const img4=await step4(img3);
//     console.log("here is the image "+img4)
// }
// orderPizza()



//document.querySelectorAll ek array return krta hai hum directlt uspe css apply nhi kr skte 
//iske liye loop chlanai pdegi
//let ele=document.querySelectorAll('h1')
//for(let e of ele){
//e.style.color="red"
//}
//ele.style.color="red"--->yh kaam nhi krega
//agar koi element ka inner text jaan na hai to
//clg(ele.innerText)
//mainpulate text
//ele.innerText='bye'

//event
//<button onclick="fun1()">click here</button>
//const fun1(){
//clg("hello");
//}

//create element using DOM
//let ele=document.querySelector('div');
// let h1=document.createElement('h1')
//let h2=document.createElement('h1')
// Element.appendChild(h1)--->append child function ek ele k liye hi use krta
// --->sol Element.append(h1,h2);
// console.log(ele)



//<input type="text">
//inputE=document.querySelector('input')
//inputE.addEventListener('input',function(){
//clg("hello")
//})

//agar whi value chahiye jo hum type kr rhe hian to
//let E=document.querySelector('input')
// E.addEventListener('input',function(event){
// console.log(event.target.value)
// })


// <input type="text" class="a">
//         <div class="b"></div>
// let e=document.querySelector('.a');
// let f=document.querySelector('.b');
// function ab(event){
//     f.innerText=event.target.value;
// }
// e.addEventListener('input',ab);


// let e=document.querySelector('.a');
// let f=document.querySelector('.b');
// let g=document.querySelector('.c');
// function ab(event){
//     var n=event.target.value
    
// }
// f.addEventListener('input',ab);





// submit event
// <form>
//  <input type='text'>
// <input type='number'>
//<button type="submit">add</button>
// </form> 
//let formE1=document.querySelector('form')
//formE1.addEventListener('submit',(event)=>{
//event.preventDefault();    --->form ki by default property hoti hai submit krne pe reload hota hai page to data turnt hi gayab ho jayega islye uske default behaviour ko rokne k liye we use this
//clg('done')
//})


//  <input type="text">
//  <button>add</button>
// <ul id="list"></ul>  
// let inputE1=document.querySelector('input')
// let buttonE=document.qureySelector('button')
//let ul=document.querySelector('ul')
//buttonE.addeventListener('click',()=>{
//let text=inputE.value;
//let li=document.createElement('li');
//li.innerText=text;
//ul.appendChild('li')
//input.value=''
//li.addEventListener('click',()=>{
//li.remove()
//})
//})
