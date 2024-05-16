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
    <div className="absolute w-screen px-8 py-2 z-10 flex justify-between items-center overflow-x-hidden">
      <img src={Logo} alt="logo" className="w-32" />
      {user && (
        <div className="flex items-center gap-3">
          {showGPTSearch && (
            <select
              className="p-2 text-white bg-black text-md rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className="p-2 text-white text-md rounded-md bg-[#e50914] hover:bg-[#d6180b] transition-all duration-[.1s] w-full font-medium"
          >
            {showGPTSearch ? "Home" : "GPTSearch"}
          </button>
          <img className="w-10 h-10" src={user?.photoURL} alt="profile-icon" />
          <button
            onClick={handleSignOut}
            className="p-2 text-white text-md rounded-md bg-[#e50914] hover:bg-[#d6180b] transition-all duration-[.1s] w-full font-medium"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
