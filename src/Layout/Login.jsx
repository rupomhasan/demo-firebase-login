import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.init";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Profile from "../Component/Profile/Profile";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
const Login = () => {
  const [user, setUser] = useState(null);

  const faceBookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();


  //Handle function for  Facebook login....
  const handleFacebookSignIn = () => {
    console.log('click the flacebook btn')
    signInWithPopup(auth, faceBookProvider)
    .then((result) => {
      const loginUser = result.user;
      console.log(loginUser);
      setUser(loginUser);
    })
    .catch((error) => {
      console.log(error);
    });
  }

//Handle function for Github login....
  const handleGitHubSignIn = () => {
    console.log("click github function");
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle function for Google Login....
  const handleGoogleSignOut = () => {
    console.log("click the sign out btn");
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("sign out seccessfully");
      })
      .catch((error) => {
        console.log("an error happend", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex gap-10 justify-center items-center   mx-auto h-[100vh] ">
      <div className=" bg-blue-200 p-10 rounded-xl w-96 text-center">
        <h1 className=" font-bold text-2xl mb-4">Sign in to Mockplus</h1>
        <div className="space-y-2 ">
          <input
            className="block px-4 py-1 rounded-lg w-full"
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            className="block px-4 py-1 rounded-lg w-full"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="flex my-8  justify-between font-extrabold">
          <button className="btn btn-sm bg-blue-500 border-none text-white w-36 hover:bg-blue-600">
            Sign In
          </button>
          <button
            onClick={handleGoogleSignOut}
            className="btn btn-sm bg-blue-500 border-none text-white w-36  hover:bg-blue-600"
          >
            Sign Out
          </button>
        </div>
        <div className="flex justify-between  py-8 border-t-2 ">
          <p>Or sign in with</p>
          <div className="space-x-2">
            <button className="text-2xl" onClick={handleGoogleSignIn}>
              <FcGoogle />
            </button>
            <button onClick={handleFacebookSignIn} className=" text-2xl ">
              <MdOutlineFacebook />
            </button>
            <button onClick={handleGitHubSignIn} className="text-2xl">
              <AiFillGithub />
            </button>
          </div>
        </div>
      </div>
      {user && (
        <div
          className={`bg-blue-200 rounded-xl p-10  ${
            user === null ? "hidden" : "block"
          }`}
        >
          <h2>Name : {user?.displayName}</h2>
          <p className={`${!user.email && 'hidden' }`}> Email : {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
