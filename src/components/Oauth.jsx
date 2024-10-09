import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../Redux/user/userSlice';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase'; // Assuming Firebase is already initialized

const Oauth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            console.log("Google sign-in result:", result);

            // Send user data to the backend
            const res = await fetch('http://localhost:3000/auth/v1/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            const data = await res.json(); // Await the response data
            console.log("Backend response data:", data);
            console.log('Navigating to home...'); 
                dispatch(signInSuccess(data));
                navigate('/');
        } catch (error) {
            console.log('Could not sign in with Google', error);
        }
    };

    return (
        <button
            type='button'
            className='flex items-center justify-center w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 rounded-lg shadow-md transition duration-200 ease-in-out'
            onClick={handleClick}
        >
            Sign in with Google
        </button>
    );
};

export default Oauth;
