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
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app); // Pass the Firebase app instance to getAuth

    const router = useRouter();

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (response) => {
                sessionStorage.setItem("Token", response.user.accessToken);

                // Use async/await here to wait for the fetch call
                try {
                    const apiResponse = await fetch('/new-drive-profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({

                            email: user.email,
                            userName: user.displayName,
                            // Include the user's email
                            // Add any additional data you want to send
                        }),
                    });

                    if (apiResponse.ok) {
                        router.push("/drive-profile");
                    } else {
                        // Handle API error response
                        alert("API call failed");
                    }
                } catch (err) {
                    // Handle fetch error
                    console.error('Error fetching data:', err);
                    alert("API call failed");
                }
            })
            .catch((err) => {
                // Handle sign-in error
                console.error('Sign-in failed:', err);
                alert("Cannot Log in");
            });
    };


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            sessionStorage.setItem("Token", user.accessToken);
            console.log(user.accessToken)

            try {
                const apiResponse = await fetch('/api/new-drive-profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        email: user.email,
                        userName: user.displayName,
                        // user: user
                        // Include the user's email
                        // Add any additional data you want to send
                    }),
                });
                console.log(apiResponse)
                if (apiResponse.ok) {
                    router.push("/drive-profile");
                } else {
                    // Handle API error response
                    alert("API call failed test");
                }
            } catch (err) {
                // Handle fetch error
                console.error('Error fetching data:', err);
                alert("API call failed catch");
            }


            // router.push("/drive-profile");
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    useEffect(() => {
        let token = sessionStorage.getItem("Token");

        if (token) {
            router.push("/drive-profile");
        }
    }, []);

    return (
        <div>
            <Head>
                <title>Ride Sharing AUTH</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <NavBar />

            <main
                className='bg-dark'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <div className='border p-5'>
                    <h1 className='text-3xl font-semibold mb-4 text-primary text-center'>
                        Driver Login
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
            <Footer />
        </div>
    );
}
