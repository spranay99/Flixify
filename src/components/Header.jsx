import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { SiOpenai } from "react-icons/si";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-screen px-2 md:px-12 py-2 z-50 flex justify-between items-center overflow-x-hidden bg-black">
      <img src={Logo} alt="logo" className="w-24 md:w-32" />
      {user && (
        <>
          <ul className="hidden lg:flex gap-6 text-white cursor-pointer ">
            {[
              "TV Shows",
              "Movies",
              "Popular",
              "My List",
              "Browse by Languages",
            ].map((item, ind) => (
              <li key={ind} className="hover:text-[#d6180b]">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {showGPTSearch && (
              <select
                className="p-2 text-white bg-black text-md rounded-md cursor-pointer"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <div className="hidden md:flex items-center gap-2">
              <IoSearch fill="white" fontSize={20} />
              <p className="text-white cursor-pointer ">Children</p>
              <FaRegBell fill="white" fontSize={20} />
            </div>
            <button onClick={handleGPTSearchClick}>
              {showGPTSearch ? (
                <IoMdHome fill="white" fontSize={30} />
              ) : (
                <SiOpenai fill="white" fontSize={30} />
              )}
            </button>
            <button
              onClick={handleSignOut}
              className="p-2 text-white text-md rounded-md bg-[#191919] hover:bg-[#d6180b] transition-all duration-[.1s] font-medium"
            >
              Sign Out
            </button>
            <img
              className="w-10 h-10"
              src={user?.photoURL}
              alt="profile-icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
