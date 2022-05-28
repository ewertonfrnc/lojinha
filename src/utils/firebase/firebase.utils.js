import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAN4vmdeKJNrzi1fJFqPkYyrnG32J_TAI8',
  authDomain: 'lojinha-db-fbff9.firebaseapp.com',
  projectId: 'lojinha-db-fbff9',
  storageBucket: 'lojinha-db-fbff9.appspot.com',
  messagingSenderId: '959940454076',
  appId: '1:959940454076:web:73dc2a9f1a3f76a0c852b9',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// Database
export const db = getFirestore()
export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('Erro ao criar usuário.', error.message)
    }
  }

  return userDocRef
}