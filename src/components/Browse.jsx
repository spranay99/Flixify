import React from "react";
import Logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  // const navigate = useNavigate();
  // const user = useSelector((store) => store.user);

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
