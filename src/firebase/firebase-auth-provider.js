import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseAuth } from './firebase-provider';

export const loginGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();

  const sign = async (googleProvider) => {
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  await sign(googleProvider);
};

export const signUpWithEmail = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    if (error instanceof Error) {
      //@ts-ignore
      return error.code;
    }
  }
};

export const loginEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    if (error instanceof Error) {
      //@ts-ignore
      return error.code;
    }
  }
};

// TODO: habilitar github
export const loginGithub = async () => {
  const githubProvider = new GithubAuthProvider();

  signInWithPopup(firebaseAuth, githubProvider)
    .then((result) => {
      // Accounts successfully linked.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // ...
    });
};

export const fnSignOut = () => {
  signOut(firebaseAuth)
    .then((res) => {
      // Sign-out successful.
      console.log(res);
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
  // try {
  //   const sign = await signOut(firebaseAuth);
  //   console.log(sign);
  // } catch (error) {
  //   console.log(error);
  // }
};
