import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import app from "./firebaseconfig";

const auth = getAuth(app);

function signUpWithPassword(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("✅ User created successfully:", user.email);
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("❌ Signup error:", errorCode, errorMessage);
            throw error; // Re-throw the error so it can be caught in the form
        });
}

function signInEmailPassword(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("✅ User signed in:", user.email);
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("❌ Sign-in error:", errorCode, errorMessage);
            throw error;
        });
}

const provider = new GoogleAuthProvider();

// There is no difference between signing in and signing up using Google SSO
function signInOrSignUpWithGoogle(): Promise<any> {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("✅ Google sign-in successful:", user.email);
            return user;
        })
        .catch((error) => {
            console.error("❌ Google sign-in error:", error.code, error.message);
            throw error;
        });
}

export { signUpWithPassword, signInEmailPassword, signInOrSignUpWithGoogle };
