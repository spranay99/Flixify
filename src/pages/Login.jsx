import React, { useRef, useState } from "react";
import { LOGIN_BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";
import Header from "../components/Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.code + " - " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-screen h-screen absolute">
        <img
          className="fixed w-full h-full object-cover"
          src={LOGIN_BACKGROUND_IMG}
          alt="background-image"
        />
        <div className="background-overlay fixed w-full h-full"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-20 left-0 right-0 w-[90%] sm:w-[70%] xl:w-[30%] md:p-14 sm:p-8 p-4 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80"
      >
        <h1 className=" py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
          type="password"
          placeholder="Password"
        />
        <p className="text-[#e50914] text-md font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 text-md rounded-md bg-[#e50914] hover:bg-[#d6180b] transition-all duration-[.1s] w-full font-medium"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="my-4 text-[#868586]">
            New to Flixify?{" "}
            <a
              className="cursor-pointer text-white transition-all duration-[.2s] hover:underline"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </a>
          </p>
        ) : (
          <p className="my-4 text-[#868586]">
            Already Registered?{" "}
            <a
              className="cursor-pointer text-white transition-all duration-[.2s] hover:underline"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
