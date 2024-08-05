//                      -- 17 / 7 /2024 --

// let array= [1,3,4,4,5,6];

// for(var i=0; i<array.length; i++){
//     if(array[i]==4){

//     }
// }

// *********************************

// let array2=array.filter((number)=>number == 4);
// console.log(array2);

// let array3=array.map((number)=>number*2)
// console.log(array3);

// let x =array.reduce((sum2,number)=>sum2+=number);
// console.log(x);

// *********************************

// let text = document.getElementById("test");
// let test22= document.getElementsByClassName("text");
// let element = document.querySelectorAll("div,h1");
// console.log(element);

// *********************************

// console.log(test22);
// console.log(text);
// text.innerText= "<h1> Web Developer</h1>"
// text.innerHTML= "<h1> Web Developer</h1>"
// text.style.width = "50vh";
// text.style.backgroundColor = "red"
// text.classList.add("div-structre");
// text.classList.remove("text");
// text.classList.replace("div-structre","text")

// *********************************

// let width = Number(prompt("Enter Width of div"));
// let bckgroundColor =prompt("Enter background Color of div");

// text.style.cssText = ` width :${width}vw ;
// background-color :${bckgroundColor}
// `;

// function showAlert(){
//     console.log("Welcome");
//     alert("Welcome");
// }

// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******
// *******
// *********************************
// *******

// let btn = document.querySelector("#say-hello");

// btn.addEventListener("keyup",(e)=>{
//     console.log(e);
//     if(e.key == "v"){
//         console.log("Welcome");
//         alert("Welcome from keyboard 1");
//     }

// })

// btn.addEventListener("ckick",(e)=>{
//     console.log(e);
//     if(e.key == "v"){
//         console.log("Welcome");
//         alert("Welcome from click");
//     }

// })
// *********************************
// *********************************

// document.querySelector("#name").addEventListener("change",(e)=>{
//     console.log(document.querySelector("#name").value);
// })
// let x =setTimeout(()=>{
//     alert("Welcome");
// },3000);

// clearTimeout(x);

// let x = setInterval(()=>{
//     alert("Welcome");
// },3000)

// let btn = document.querySelector("#say-hello");

// btn.addEventListener("click",(e)=>{
// clearInterval(x);
//     })

// exeception Handling

// try{
//      btn.addEventListener("click",(e)=>{
//         alert("Welcome");
//             })
//  let x = 5;
// console.log(x);
// }catch(e){
//     alert("BTN not defiend !!!")
// }

// *********************************
// *********************************
// *********************************
// *********************************

// let btn = document.querySelector("#say-hello");
// let userName = document.querySelector("#name");
// let msg = document.querySelector("#msg");

// let user={
//     name :"Mohammed",
//     email:"mohammed@mail.com"
// }

// btn.addEventListener("click",()=>{

//     sessionStorage.setItem("data","Mohhamed");
// console.log(sessionStorage.getItem("data"))

// localStorage.setItem("userdata",JSON.stringify(user));
// msg.innerText= `Hello ${localStorage.getItem("userName")}`;
// })

// if(localStorage.getItem("userName")){
//     msg.innerText= `Hello ${localStorage.getItem("userName")}`;
// }

// console.log(JSON.parse(localStorage.getItem("userdata")).name);

// --   28 29 30                               31               1         2               3 4
/*
        y  y   no(is start projectTask) / no(physical seasion)  y  / no(online seasion) / y y
*/

/*********************************/
// *******
// *********************************
// *******
// *******
// *********************************
// *******
/*********************************/
// ? *******

// const myBtn = document.querySelector(".btn")
// const myBtn2 = document.getElementById("btn")
// const myBoot = document.getElementById("myboot")

// // console.log(`myBtn => ${myBtn2}`);

// myBtn2.addEventListener("click" , (e) => {

// // console.log(`myBtn => ${myBtn2.innerText}`);

// // let myy= document.createElement("h3")
// // myy.innerText = "hello my name is ahmed"

// // myy.classList.add("coloers")

// // myBoot.append(myy)

// })

// setTimeout(() => {
//        console.log("my is settimeout");
// }, 2000);

// setInterval(() => {
//         console.log("my is settimeout");
//  }, 2000);

//************************************************* */

// my_element.addEventListener("click", function (e) {
//     console.log(this.className); // logs the className of my_element
//     console.log(e.currentTarget === this); // logs `true`
//   });

// my_element.addEventListener("click", (e) => {
//   console.log(this.className); // WARNING: `this` is not `my_element`
//   console.log(e.currentTarget === this); // logs `false`
// });

//************************************************* */
// "use strict";

// let my = document.querySelector("#myHead");

// my.addEventListener("click", function(e)  {
//   console.log(my);
//   console.log("*".repeat(20));
//   console.log(e.target);
//   console.log("*".repeat(20));
//   console.log(e.currentTarget);
//   console.log("*".repeat(20));
//   console.log(this);
// });

// let num =  () =>{
//   return this;
// };
// console.log(num());

//************************************************* */
//************************************************* */

// console.log(`before ahmed`);
// console.log(`before ahmed`);

// setTimeout(()=>{
//        console.log(`this is timeout`);
// },0)

// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);
// console.log( ` after ahmed`);

// ************************************************

// let myRequest = new XMLHttpRequest();

// // myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
// myRequest.open("GET", "https://freetestapi.com/api/v1/students");
// myRequest.send();

// // console.log(myRequest.responseText);
// // myRequest.responseType = "json";
// myRequest.onreadystatechange = function () {
//   //   if (myRequest.status == 200 && myRequest.readyState == 4) {
//   //     console.log(this.responseText);
//   //   } else {
//   //     console.log(`is Error`);
//   //   }

//   //   console.log(`this is status ${myRequest.status}`);
//   //   console.log(`this is readyStatus ${myRequest.readyState}`);

//   if (this.readyState == 4) {
//     //     console.log(JSON.parse(this.responseText));
//     let mydata = JSON.parse(this.responseText);
//     console.log(mydata);

//     for (let i = 0; i < mydata.length; i++) {
//       let myEle = document.createElement("div");
//       let myText = document.createTextNode(`my ID is ${mydata[i].id}`);
// 			myEle.appendChild(myText);
// 			document.body.appendChild(myEle)
//       console.log(myEle);
//     }
//   }
// };

// console.log(myRequest.responseText);

// *********************************

// let myGet = new XMLHttpRequest();

// myGet.open("GET", "/json.json");
// myGet.send();
// myGet.addEventListener("readystatechange", () => {
//   if (myGet.readyState == 4) {
//     // let myDiv = document.createElement("div");
//     // let myDivText = document.createTextNode(JSON.parse(myGet.responseText)[0]);
//     // myDiv.appendChild(myDivText);
//     // document.body.appendChild(myDiv);
//     console.log(JSON.parse(myGet.response));
//   }
// });

// name === this name

/*
  storys
*/

let myUsers = new XMLHttpRequest();

myUsers.open("GET", "/Day8/json.json");
myUsers.send();

myUsers.addEventListener("readystatechange", () => {
  if (myUsers.readyState == 4 && myUsers.status == 200) {
    let myUserJson = JSON.parse(myUsers.response); // all users
    for (let i = 0; i < myUserJson.length; i++) {
      // lope of your users
      let user = ` 
        <div class="user " id= "${myUserJson[i].id}">
          <img class="userImg" src="${myUserJson[i].img}" alt="" id= "${myUserJson[i].id}" />
          <div class="text">
            <h2 class="userName" id= "${myUserJson[i].id}">${myUserJson[i].name}</h2>
            <p class="userTitle" id= "${myUserJson[i].id}">@${myUserJson[i].name}</p>
          </div>
          <button id= "${myUserJson[i].id}">Follow</button>
        </div>`; // creat new user
      document.querySelector(".myUsers").innerHTML += user; // add this user in div.myUsers
    }
  }
});

let myUserss = new XMLHttpRequest();

myUserss.open("GET", "/Day8/json.json");
myUserss.send();

myUserss.addEventListener("readystatechange", () => {
  let myUserJson = JSON.parse(myUserss.response);
  document.addEventListener("click", (e) => {
    for (let i = 0; i < 10; i++) {
      if (+e.target.id === +myUserJson[i].id) {
        for (let j = 0; j < myUserJson[i].description.length; j++) {
          let description = `
          <div class="oneStory">
            <div class="tilte">
              <img class="userImg" src="${myUserJson[i].img}" alt="" />
              <h2 class="userName">${myUserJson[i].name}</h2>
              <p class="userTitle">${myUserJson[i].name}</p>
            </div>
            <div class="discryption">
            ${myUserJson[i].description[j]}
            </div>
            <div class="footer">
              <i class="fa-regular fa-comment"> 50 </i> 
              <i class="fa-solid fa-retweet"> 277</i> 
              <i class="fa-regular fa-heart"> 892</i>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
        `;
          document.querySelector(".userStory").innerHTML += description;
        }
      } 
    }
  });
});
