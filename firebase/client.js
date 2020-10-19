import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBjhT2lfplvbDiV0VAJukvemfvXdVgwRxE',
  authDomain: 'devter-3dc79.firebaseapp.com',
  databaseURL: 'https://devter-3dc79.firebaseio.com',
  projectId: 'devter-3dc79',
  storageBucket: 'devter-3dc79.appspot.com',
  messagingSenderId: '173785859349',
  appId: '1:173785859349:web:5d2b4814b917c362bfd51c',
  measurementId: 'G-G6W7Y0FZ9E'
}

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user
  return {
    username: displayName,
    avatar: photoURL,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normallizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normallizedUser)
  })
}

export const loginWithGitGub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
