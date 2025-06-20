import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function signupWithPassword(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });
}

export default signupWithPassword;

