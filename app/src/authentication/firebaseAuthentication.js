

let firebase = require("firebase/app");
require("firebase/auth")
const firebase = require("firebase/app");

function createUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // user is signed in, created, or signing in for first time
    let user = userCredential.user;
    }).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
    })
}

function signOut() {
  firebase.auth().signOut().then(() => {
    console.log("Signed out.")
  }).catch((error) => {
    console.error(error);
  })
}

function checkUserState() {

}