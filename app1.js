// // Client secret - 7862c4c3d7b9a403c2fd11cabed423e59a17067c
// // Client ID - 3d391f1dba748bce91c5

// // Initialise Github class
// const github = new Github;
// // Initialise UI class
// const ui = new UI;

// // Search for user
// const searchUser = document.getElementById('searchUser');

// // Search input event listener
// searchUser.addEventListener('keyup', (e) => {
//     // Get user input
//     const userText = e.target.value;
//     if(userText !== ''){
//         // Show profile
//         // console.log(userText);
//         github.getUser(userText)
//         .then(data => {
//             // console.log(data)
//             if(data.profile.message === 'Not Found') {
//                 // Show Alert
//                 ui.showAlert('User not found', 'alert alert-danger');
//             } else {
//                 // Show profile
//                 ui.showProfile(data.profile);
//                 ui.showRepos(data.repos);
//             }
//         })

//     } else {
//         // Clear profile
//         ui.clearProfile();
//     }
// });


///////////////////////////////////////////////

// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
}); 