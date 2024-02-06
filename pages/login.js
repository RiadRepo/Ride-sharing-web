// login.js
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup, // Add this import
} from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import app from "../firebaseConfig"; // Import the Firebase configuration

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app); // Pass the Firebase app instance to getAuth

  const router = useRouter();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Token", response.user.accessToken);
        router.push("/");
      })
      .catch((err) => {
        alert("Cannot Log in");
      });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      sessionStorage.setItem("Token", user.accessToken);
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Ride Sharing AUTH</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100%",
        }}
      >
        <div>
          <h1 className='text-3xl font-semibold mb-4 text-primary text-center'>
            Login
          </h1>
          <div>
            <input
              placeholder='Email'
              className='form-control mb-3'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type='email'
            />
            <input
              placeholder='Password'
              className='form-control mb-3'
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type='password'
            />
          </div>

          <button className='btn btn-primary btn-block' onClick={signIn}>
            Sign In
          </button>
          <button
            className='btn btn-danger btn-block '
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </button>
        </div>
      </main>
    </div>
  );
}
