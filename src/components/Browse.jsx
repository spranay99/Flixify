import React from "react";
import Logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header className="p-5 flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-32" />
        <div className="flex gap-3">
          <img className="w-10 h-10" src={user?.photoURL} alt="profile-icon" />
          <button
            onClick={handleSignOut}
            className="p-2 text-white text-md rounded-md bg-[#e50914] hover:bg-[#d6180b] transition-all duration-[.1s] w-full font-medium"
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
};

export default Browse;
