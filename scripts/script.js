// let myUsers = new XMLHttpRequest();

// myUsers.open("GET", "/Day8/json.json");
// myUsers.send();

// myUsers.addEventListener("readystatechange", () => {
//   if (myUsers.readyState == 4 && myUsers.status == 200) {
//     let myUserJson = JSON.parse(myUsers.response); // all users
//     for (let i = 0; i < myUserJson.length; i++) {
//       // lope of your users
//       let user = `
//         <div class="user " id= "${myUserJson[i].id}">
//           <img class="userImg" src="${myUserJson[i].img}" alt="" id= "${myUserJson[i].id}" />
//           <div class="text">
//             <h2 class="userName" id= "${myUserJson[i].id}">${myUserJson[i].name}</h2>
//             <p class="userTitle" id= "${myUserJson[i].id}">@${myUserJson[i].name}</p>
//           </div>
//           <button id= "${myUserJson[i].id}">Follow</button>
//         </div>`; // creat new user
//       document.querySelector(".myUsers").innerHTML += user; // add this user in div.myUsers
//     }
//   }
// });

// let myUserss = new XMLHttpRequest();

// myUserss.open("GET", "/Day8/json.json");
// myUserss.send();

// myUserss.addEventListener("readystatechange", () => {
//   if (myUserss.readyState == 4 && myUserss.status == 200) {
//   let myUserJson = JSON.parse(myUserss.response);
//   document.addEventListener("click", (e) => {
//     for (let i = 0; i < 10; i++) {
//       if (+e.target.id === +myUserJson[i].id) {
//         for (let j = 0; j < myUserJson[i].description.length; j++) {
//           let description = `
//           <div class="oneStory">
//             <div class="tilte">
//               <img class="userImg" src="${myUserJson[i].img}" alt="" />
//               <h2 class="userName">${myUserJson[i].name}</h2>
//               <p class="userTitle">${myUserJson[i].name}</p>
//             </div>
//             <div class="discryption">
//             ${myUserJson[i].description[j]}
//             </div>
//             <div class="footer">
//               <i class="fa-regular fa-comment"> 50 </i>
//               <i class="fa-solid fa-retweet"> 277</i>
//               <i class="fa-regular fa-heart"> 892</i>
//               <i class="fa-solid fa-arrow-up-from-bracket"></i>
//             </div>
//         </div>
//         `;
//           document.querySelector(".userStory").innerHTML += description;
//         }
//       }
//     }
//   });}
// });

// /******************************** */

let myUsersRequest = new XMLHttpRequest();
myUsersRequest.open("GET", "/Day8/json.json");
myUsersRequest.send();

myUsersRequest.addEventListener("readystatechange", () => {
  if (myUsersRequest.readyState == 4 && myUsersRequest.status == 200) {
    let myUserJson = JSON.parse(myUsersRequest.response);
    let userContainer = document.querySelector(".myUsers");
    userContainer.innerHTML = ""; // Clear any existing user data
    for (let i = 0; i < myUserJson.length; i++) {
      let user = `
        <div class="user" id="${myUserJson[i].id}">
          <img class="userImg" src="${myUserJson[i].img}" alt="${myUserJson[i].name}" id="${myUserJson[i].id}" />
          <div class="text">
            <h2 class="userName" id="${myUserJson[i].id}">${myUserJson[i].name}</h2>
            <p class="userTitle">@${myUserJson[i].name}</p>
          </div>
          <button>Follow</button>
        </div>`;
      userContainer.innerHTML += user;
    }
  }
});

document.querySelector(".myUsers").addEventListener("click", (e) => {
  let userId = e.target.id;
  if (userId) {
    // 2
    let userRequest = new XMLHttpRequest();
    userRequest.open("GET", "/Day8/json.json");
    userRequest.send();
    userRequest.addEventListener("readystatechange", () => {
      if (userRequest.readyState == 4 && userRequest.status == 200) {
        let myUserJson = JSON.parse(userRequest.response);
        let selectedUser = myUserJson.find((user) => user.id == userId);
        if (selectedUser) {
          let userStoryContainer = document.querySelector(".userStory");
          userStoryContainer.innerHTML = ""; // Clear previous user stories
          for (let j = 0; j < selectedUser.description.length; j++) {
            let description = `
              <div class="oneStory">
                <div class="title">
                  <img class="userImg" src="${selectedUser.img}" alt="${selectedUser.name}" />
                  <h2 class="userName">${selectedUser.name}</h2>
                  <p class="userTitle">@${selectedUser.name}</p>
                </div>
                <div class="description">
                  ${selectedUser.description[j]}
                </div>
                <div class="footer">
                  <i class="fa-regular fa-comment"> 50 </i> 
                  <i class="fa-solid fa-retweet"> 277</i> 
                  <i class="fa-regular fa-heart"> 892</i>
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
              </div>`;
            userStoryContainer.innerHTML += description;
          }
        }
      }
    });
  }
});
