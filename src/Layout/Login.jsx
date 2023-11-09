import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center   mx-auto h-[100vh] ">
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
        <button className="btn btn-sm bg-blue-500 border-none text-white w-full my-8 hover:bg-blue-600">
          Sign In
        </button>
        <div className="flex justify-between  py-8 border-t-2 ">
          <p>Or sign in with</p>
          <div className="space-x-2">
            <button className="text-2xl" onClick={handleGoogleSignIn}>
              <FcGoogle />
            </button>
            <button className=" text-2xl ">
              <MdOutlineFacebook />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
