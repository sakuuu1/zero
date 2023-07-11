// var a="abc";
//  a="bc";
// console.log(a);
// console.log(typeof(a));
// console.log(10+20);
// console.log(10+"20");
// console.log(10-"20")
// console.log("viii"-"hii")
// console.log(true+true)
// console.log(false+false)
// var b=null;
// console.log(typeof(b))
// var c
// console.log(typeof(c))
// var d=99
// console.log(isNaN(d))
// var e="hsdghgg"
// console.log(isNaN(e))
// console.log(isNaN(Number))
// console.log(NaN==NaN)
// console.log(isNaN(Number.NaN))
//  console.log(isNaN(NaN))
// console.log(Number.isNaN(NaN))
// let ab=10;
// function a(){
//     console.log(ab)
// }
// a();
// let ab=10;
// function a(){
//     cc="shipra";
//     console.log(ab)
//     console.log(cc)
// }
// console.log(cc)
// a();
// let ab=10;
// function a(){
//     console.log(ab)
//     if(ab==10){
//         let n=12;
//         console.log(n);
//     }
//     console.log(n)
// }
// a();
// let a='abc';
// console.log(a)
// var ab=function(){
// console.log(10+20)
// return "hey"
// }
// console.log(ab())
// ab=20;
// console.log(ab)
// const a=()=>{
// console.log("aaaa")
// }
// a();
// function nnn(){
//     return `the sum is ${10+20}`
// }
// console.log(nnn());
// var friends=["a","b","c","d"];
// const [m,n,o,p]=friends;
// console.log(m)
// console.log(n)
// nm='hhh';
// console.log(nm)
// for(var a of friends ){
//     console.log(a)
// }
// friends.forEach((ele,ind,arr)=>{
// console.log(ele+" "+ind+" "+arr)
// }
// )
// var pp=[1,2,"an","sh","ik","ka"];
// pp.forEach(function(ele,ind,arr){
//     console.log(ele+" "+ind+" "+arr)
// })
// pp.forEach((ele,ind,arr)=>{
//     console.log(ele+" "+ind+" "+arr)
// })
// var g=["hippo","sakku","hippo","pappu","hippo"];
// console.log(g.indexOf("hippo",2))
// console.log(g.lastIndexOf("hippo",3))
// console.log(g.includes("hip",6))
// const arry=[10,20,30,40,50,60];
// const fin=arry.find((val)=>{return val>30});
// console.log(fin)
// const a=arry.find((curr)=>{return curr<10})
// console.log(a)
// const bb=(arry.findIndex((cur)=>{return cur<20}))
// console.log(bb)
// const vv=arry.filter((curr,ind)=>{{return curr<20}})
// console.log(vv) 
// console.log(arry)
// console.log(arry.sort())
// const bn=["april","month","jan","feb"];
// console.log(bn.sort())
// arry.push(23);
// console.log(arry.push(0))
// console.log(arry)
// console.log(arry.unshift(99))
// console.log(arry)
// c=arry.pop();
// console.log(arry.pop())
// console.log(c)
// console.log(arry)
// mm=bn.splice(bn.length,2,55);
// mm=console.log(1,2,"hello")
// console.log(bn)
// console.log(mm)
// var arr=["a","e","i","o","u"];
// arr.splice(0,0,"4");
// var aa=arr.splice(arr.length,1,"abc")
// var aa=arr.splice(1,1,"m");
// s=arr.indexOf('e');
// var aa=arr.splice(s,1,"l");
// console.log(arr)
// console.log(aa)
// console.log(s)
// var ss=["jan","feb","march","april"];
// d=ss.indexOf("march");
// ss.splice(d,1,"Mar");
// console.log(ss);
// const j=[1,5,7,3,9,120];
// var i=j.map((ele,ind)=>{return ele>7 && ind>4});
// console.log(i)
// var x=j.map((val)=>{return Math.sqrt(val)});
// console.log(x)
// var x1=j.map((val)=>{return (val*2)}).filter((val)=>{return val>10}).reduce((acc,ele)=>{return acc+=ele})
// console.log(x1)
// var d=j.reduce((acc,ele,ind,arr)=>{return acc+=ele});
// var d=j.reduce((acc,ele,ind,arr)=>{return acc},5)
// console.log(d)
// console.log(j)
// const arr=[['z1','z2'],['z3','z4'],['z5','z6']];
// var gg=arr.reduce((acc,ele,ind,arr)=>{return acc.concat(ele)});
// console.log(gg)
// var a="shipraaa";
// console.log(a.length)
// var b="nammmmm";
// console.log(b.length)
// console.log("abc \" hello")
// console.log("heyy hello \"suuuu\"  \' ")
// console.log(" ' shipra ' ")
// let b="something going to be happen good i believe";
// console.log(b)
// console.log(b.substring(0,7))
// console.log(b.indexOf('o',3))
// console.log(b.lastIndexOf("Z"))
// console.log(b.lastIndexOf("e"))
// console.log(b.search("b"))
// console.log(b.slice(8,-2))
// console.log(b.substring(0,19))
// console.log(b.substring(-3))
// console.log(b.substr(0,20))
// let f="i am a pre final year student";
// console.log(f.replace("j","o"))
// console.log(f.charAt(2))
// console.log(f.charAt(9))
// console.log(f.charCodeAt('0'))
// var d="HGSDHGEWHDhnvdgcefdfcwfs";
// console.log(d.charCodeAt(d.length-1))
// console.log(d[4])
// console.log(d.toLowerCase())
// console.log(d.toUpperCase())
// let fname="    shipra  ";
// let lname="agrawal   ";
// console.log(fname+" "+lname);
// console.log(fname.concat(" ",lname))
// console.log(`${fname} ${lname}`)
// console.log(fname.trim()+lname.trim())
// var d="  shipra    agrawal  1"
// console.log(d.trim())
// console.log(fname.split(" "))
// let r="a,v,f,d,  cdhc"
// console.log(r.split(","))
// var txt="a,b,c | d,e";
// console.log(txt.split("|"))
// var currdate=new Date();
// console.log(currdate)
// console.log(currdate.toLocaleString())
// console.log(currdate.toString())
// console.log(new Date().toString())
// console.log(Date.now())
// var d=new Date(2021,3,13,3,5,34,4)
// console.log(d.toLocaleString())
// var d=new Date("October 13,2012 12:12:78");
// console.log(d.toString())
// var e=new Date(1687196714841)
// console.log(e.toLocaleString())
// var f=new Date();
// console.log(f)
// console.log(f.toLocaleString())
// console.log(f.toString())
// console.log(f.getDate())
// console.log(f.getMonth())
// console.log(f.getFullYear())
// console.log(f.getDay())
// console.log(f.setDate(22))
// console.log(f.setMonth(3))
// console.log(f.setFullYear(2023))
// console.log(f.setFullYear(2023,6,8))
// console.log(f.toLocaleString())
// console.log(f.toString())
// console.log(f.getTime())
// console.log(f.getHours())
// console.log(f.getMinutes())
// console.log(f.getSeconds())
// console.log(f.setTime(6))
// console.log(f.toLocaleString())
// console.log(f.setHours(5))
// var a=new Date();
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())
// console.log(a.getTime())
// console.log(a.setHours(3))
// console.log(a.setMinutes(30))
// console.log(a.setSeconds(5))
// console.log(a.setMilliseconds(7))
// console.log(a.toString())
// console.log(a.setTime(8))
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleTimeString())
// console.log(Math.PI)
// console.log(Math.round(6.99))
// console.log(Math.round(6.66))
// console.log(Math.round(6.4))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.abs(-9))
// console.log(Math.ceil(6.7))
// console.log(Math.ceil(6.5))
// console.log(Math.ceil(6.2))
// console.log(Math.floor(6.8))
// console.log(Math.floor(6.3))
// console.log(Math.min(6,7,8,-6,7,6))
// console.log(Math.max(8,3,-9,10,45))
// console.log(Math.random()*100)
// console.log(Math.trunc(19900.65326))
// let biodata={
//     name:"shipra",
//     age:20,
//     work:function a(){
//         console.log("student")
//         console.log(`${biodata.age}`)
//     }
// }
// console.log(biodata.name)
// console.log(biodata.work())

// let biodata={
//     name:{
//         fname:"shipra",lname:"agrawal",age:20,
//         data(){
//             console.log(`name is ${biodata.name.fname}`)
//         }
//     },
//     getdata(){    //:function a()
//         console.log(`surname is ${biodata.name.lname}`)
//         console.log(biodata.name.fname)
//     }
// }
// biodata.name.data()
// console.log(biodata.getdata())
// console.log(this)

// let biodata={
//     fname:"shipra",
//     lname:"agrawal",
//     data(){
//         console.log(this)
//     }
// }
// biodata.data()

// var biodata=["shipra","agrawal",20];
// console.log(biodata[0])
// var [a,b,c,d,e="hey"]=biodata;
// console.log(a)
// console.log(d)
// console.log(e)

// const nam={
//     a:"shipra",
//     b:"agrawal",
//     age:20
// }
// console.log(name.a)
// let {a,b,ag}=nam
// console.log(b)
// console.log(ag)

// let myname="shipra"
// const bio={
//     [myname]:"harshu",
//     [20+8]:"is my age"
// }
// console.log(bio)


// e="hey"
// var f="b"
// let namess={
//     a:"ashok",
//     b:"ramesh",
//     c:"suresh",
//     d:"kamlesh",
//     [f]:"h",
//     e,
    
// }
// console.log(namess)
// console.log(namess.a)
// console.log(e)
// console.log(f)

// var a=[1,2,3,4];
// var b=[...a,45,26]
// console.log(b)
// console.log(b.includes('red'))

// const arr=[1,2,3,4,5]
// function uu(x){
//     return x*2
// }
// var otp=arr.map(uu)
// console.log(otp)

// const n1=[1,2,3,4,5,6]
// var n2=n1.map((ele)=>{
// return ele*2
// })
// console.log(n2)

// const n1=[1,2,3,4,5,6]
// function n3(x){
//     return x*2
// }
// var n2=n1.map(n3)
// console.log(n2)

// const n1=[1,2,3,4,5,6]
// function n2(x){
//     return x.toString(2);
// }
// var n3=n1.map(n2)
// console.log(n3)

// const n1=[1,2,3,4,5,6]
// function a(x){
//     return x>4
// }
// var n3=n1.filter(a)
// console.log(n3)

// const n1=[1,2,3,4,5,6]
// const n2=n1.reduce((acc,ele)=>{
//     return acc+=ele
// })
// console.log(n2)

// const n1=[1,2,3,4,5,6]
// function a(acc,ele){
//     return acc+=ele
// }
// const f=n1.reduce(a)
// console.log(f)

// const n1=[1,2,3,4,5,6]
// const n2=n1.reduce(function(acc,ele){
//     return acc+=ele
// },2)
// console.log(n2)

// const n1=[1,2,3,4,5,6]
// const n2=n1.reduce(a=(acc,ele)=>{
// if(ele>acc)
// acc=ele
// return acc
// },0)
// console.log(n2)

// var biodata=[
//     {
//         fname:"shipra", lname:"agrawal",age:20
//     },
//     {
//         fname:"mohit", lname:"goyal",age:23
//     },
//     {
//         fname:"sakshi", lname:"goyal",age:20
//     }
// ];
// console.log(biodata)
// const n1=biodata.map((ele)=>{
//     return ele.fname+" "+ele.lname
// })
// console.log(n1)

// const a=biodata.reduce((acc,ele)=>{
//     if(acc[ele.age]){
//         acc[ele.age]+=1
//     }
//     else{
//         acc[ele.age]=1
//     }
//     return acc;
// },{})
// console.log(a)

// var biodata=[
//     {
//         fname:"shipra", lname:"agrawal",age:20
//     },
//     {
//         fname:"mohit", lname:"goyal",age:23
//     },
//     {
//         fname:"sakshi", lname:"goyal",age:20
//     }
// ];
// const n1=biodata.filter((ele)=>{
//         return ele.age<21;
// }).map((ele)=>{return ele.fname});
// console.log(n1)

// const n2=biodata.reduce((acc,ele)=>{
// if(ele.age<21){
//  acc.push(ele.fname)
// }
// return acc
// },[])
// console.log(n2)

//rest operator
// function d(...inp){
//     var t=0;
//     for(var a of inp){
//         t+=a
//     }
//     console.log(t)
// }
// d(1,2,3,4,5,6,7,8,9);

// let myage="26".padStart(10);
// console.log(myage)
// let abc="shipra".padStart(20)
// console.log(abc)

// var obj={name:"shipra",age:20}
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log({...obj})

// var z=['zone1','zone2',['zone3','zone4','zone5'],['zone6','zone7'],'zone8',['zone9','zone10','zone11','zone12']];
// console.log(z.flat())

// var b=[['nam','shipra'],['age',20]]
// console.log(Object.fromEntries(b))

// function sum(a,b){
// return a+b;
// }
// function sub(a,b){
// return a-b
// }
// function mul(a,b){
// return a*b
// }
// function div(a,b){
// return a/b
// }
// function power(a,b){
// return a**b
// }
// const f=(a,b,operator)=>{return operator(a,b)};
// console.log(f(10,20,div))

// var n1=10
// function a(){
//     var n2=5
//     function b(){
//         var n3=20
//         console.log(n1+n2+n3)
//     }
//     console.log(n1+n2+n3)
//     b();
// }
// a()

// var a={
//     name:"shipra",age:20,work:"student"
// }
// // console.log(Object.values(a))
// console.log(Object.entries(a))
// var a="shipra"
// var d=a.padStart(10);
// console.log(d)
// console.log({...a})
// var b=[['z1','z2'],['z3'],['z4','z5','z6'],['z7'],['z8','z9']]
// console.log(b.flat())
// var c=[ [ 'name', 'shipra' ], [ 'age', 20 ], [ 'work', 'student' ] ]
// console.log(Object.fromEntries(c))

// "use strict"
//  a=10
// console.log(a)

// const add=(a,b)=>{
//     return a+b
// }
// const sub=(a,b)=>{
//     return a-b
// }
// const mul=(a,b)=>{
//     return a*b
// }
// const div=(a,b)=>{
//     return a/b
// }
// const b=(a,b,operator)=>{return operator(a,b)};
// console.log(b(2,6,add)) 
// console.log(b(5,6,mul))

// getName();
// console.log(x)
// console.log(getName)
// var x=7
// function getName(){
//     console.log("js")
// }

// const outer=(a)=>{
//     let b=10
//     const inner=()=>{
//         let sum=a+b
//         console.log(a+b)
//     }
//     inner()
// }
// outer(5)

// function x(){
//     var a=10
//     var b=20
//     function y(){
//         console.log(b)
//     }
//     return y
// }
// var z=x()
// z()
// console.log(z)

// function two(){
//     console.log("two")
// }
// function one(){
//     console.log("one")
//     two();
//     console.log("three")
// }
// one()

// function two(){
// setTimeout(()=>{
//     console.log("two")
// },2000)
// }
// function one(){
// console.log("one")
// two()
// console.log("three")
// }
// one()

// function a(x){
//     console.log("one")
//     return function b(y){
//         console.log("two")
//         return function c(z){
//             console.log("three")
//             console.log(x+y+z)
//         }
//     }
// }
// a(1)(2)(3)

// setTimeout(()=>{
//     console.log("work1");{
//         setTimeout(()=>{
//             console.log("work2");{
//                 setTimeout(()=>{
//                     console.log("work3");{
//                         setTimeout(()=>{
//                             console.log("work4");{
//                                 setTimeout(()=>{
//                                     console.log("work5")
//                                 },1000)
//                             }
//                         },1000)
//                     }
//                 },1000)
//             }
//         },1000)
//     }
// },1000)


//window+.=>for emoji
//pizza->dough->cheese
// function cheese(callback){
//     setTimeout(()=>{
//         const cheese='🧀';
//         console.log('here is the cheese '+cheese);
//         callback(cheese);
//     },3000)
// }
// function dough(cheese,callback){
// setTimeout(()=>{
//     const dough="🍩 "+cheese;
//     console.log("here is the dough "+dough);
//     callback(dough);
// },3000)
// }
// function Pizza(dough,callback){
//     setTimeout(()=>{
//         const pizza="🍕 ";
//         console.log("here is the pizza "+pizza);
//         callback(pizza);
//     },3000)
// }
// cheese((cheese)=>{
// dough(cheese,(dough)=>{
//    Pizza(dough,(pizza)=>{
//     console.log("got the pizza "+pizza)
//    });
// });
// });


// promises
// let p=new Promise(function(resolve,reject){
//     let a=7;
//     if(a==3){
//         resolve("success")
//     }
//     else{
//         reject("failed")
//     }
// })
// frst
// p.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
// console.log(msg)
// })

// scnd
// let onFulfil=(msg)=>{
//     console.log(msg)
// }
// let onReject=(msg)=>{
//     console.log(msg)
// }
// p.then(onFulfil).catch(onReject)

// const p=new Promise(function(resolve,reject){
//     resolve("success")
//     reject("failed")
// })
// p.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })

// let p=new Promise(function(resolve,reject){
//     resolve('sucessfull')
//     reject('faileddd')
// })
// p.then((data)=>{
//     let data1="data1"
//     console.log(data+" "+data1)
//     return data1;
// }).then((data1)=>{
//     let data2="data2"
//     console.log(data1+" "+data2)
//     return data2
// }).then((data2)=>{
//     let data3="data3"
//     console.log(data2+" "+data3)
// })

// GET https://icanhazdadjoke.com/


// function needFlour(makeDough){
//     setTimeout(()=>{
//         var Flour="f";
//         console.log("here is the flour "+Flour)
//         makeDough(Flour)
//     },4000)
// }
// function makeDough(Flour,makeChappati){
//     setTimeout(()=>{
//         var dough=Flour+" d";
//         console.log("here is the dough "+dough);
//         makeChappati(dough);
//     },3000)
// }
// function makeChappati(dough,makeChappati){
//     setTimeout(()=>{
//         var Chappati=dough+"  C";
//         console.log("here is the chappati "+Chappati);
//         makeChappati(Chappati);
//     },3000)
// }
// needFlour((Flour)=>{
// makeDough(Flour,(dough)=>{
//     makeChappati(dough,(Chappati)=>{
//         console.log(Chappati);
//     },3000)
// })
// })


// var p=new Promise(function(resolve,reject){
//     resolve("helooo");
//     reject("byeee");
// })
// var onFulfil=(msg)=>{
//     console.log(msg)
// }
// var onReject=(msg)=>{
//     console.log(msg)
// }
// p.then(onFulfil).catch(onReject);






// function getCheese(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          const cheese="🧀";
//          console.log("here is the cheese "+cheese)
//          resolve(cheese);
//      },2000)
//     })
//  }
//  function getDough(cheese){
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              const dough="🍩"+cheese;
//          console.log("here is the dough "+dough)
//          resolve(dough)
//          },2000)
//      })
//  }
//  function bakePizza(dough){
//      return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              const Pizza=dough+"🍕";
//          console.log("here is the pizza "+Pizza)
//          resolve(Pizza)
//          },2000)
//      })
//  }
//  getCheese()
//  .then((data)=>{
//      return getDough(data)
//  })
//  .then((data1)=>{
//      return bakePizza(data1)
//  })
//  .then((pizza)=>{
//      console.log(pizza)
//  })

// async function orderPizza(){
// var a=await getCheese();
// var b=await getDough(a);
// var c=await bakePizza(b);
// console.log(c)
// }
// orderPizza()

