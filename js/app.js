// Search Input
const searchUser = document.getElementById('searchUser');

// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        //  Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
    // Clear Alert
    ui.clearAlert();
  }
});