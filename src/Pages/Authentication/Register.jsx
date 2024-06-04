import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import { useRef, useState } from "react";
const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      //1. Upload Image
      const imageData = await imageUpload(image);

      //2. User Registration
      const result = await createUser(email, password);

      //3. Save username & profile photo
      await updateUserProfile(name, imageData?.data?.display_url);
      console.log(result);

      //4. save user data in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);
      // result.user.email

      //5. get token
      await getToken(result?.user?.email);
      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //2. User Registration using google
      const result = await signInWithGoogle();

      //4. save user data in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      //5. get token
      await getToken(result?.user?.email);
      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [passValidMsg, setPassValidMsg] = useState(
    "Password need to include length 8, Special Character, Capital Letter, Number!"
  );
  const [isValid, setIsValid] = useState(false);
  const verifyRef = useRef();
  const handleValidPassword = (e) => {
    setIsValid(false);
    const capitalLetterRegEx = /[A-Z]/;
    let count = 0;
    const numberRegex = /\d/;
    // eslint-disable-next-line no-useless-escape
    const specialCharacter =/[\!\@\#\$\%\^\&\*\(\)\-\+\[\]\{\}\;\:\'\"\,\<\>\.\?\/\\\|\~\`]/;
    const validWords = [
      "8 Character",
      "Capital Letter",
      "Number",
      "Special Character",
    ];

    const password = e.target.value;
    const verifyElements = verifyRef.current.childNodes;

    if (password.length >= 8) {
      verifyElements[0].classList.remove("hidden");
      validWords[0] = "";
      count++;
    } else {
      verifyElements[0].classList.add("hidden");
      validWords[0] = "8 Character";
    }

    if (capitalLetterRegEx.test(password)) {
      verifyElements[1].classList.remove("hidden");
      validWords[1] = "";
      count++;
    } else {
      verifyElements[1].classList.add("hidden");
      validWords[1] = "Capital Letter";
    }

    if (numberRegex.test(password)) {
      verifyElements[2].classList.remove("hidden");
      validWords[2] = "";
      count++;
    } else {
      verifyElements[2].classList.add("hidden");
      validWords[2] = "Number";
    }

    if (specialCharacter.test(password)) {
      verifyElements[3].classList.remove("hidden");
      validWords[3] = "";
      count++;
    } else {
      verifyElements[3].classList.add("hidden");
      validWords[3] = "Special Character";
    }

    setPassValidMsg(
      `Password need to include ${validWords[0]}, ${validWords[1]}, ${validWords[2]}, ${validWords[3]}`
    );

    if (count > 2 && password.length >= 8) {
      setPassValidMsg("Your password is valid!");
      setIsValid(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
            <label htmlFor="with-indications" className="text-gray-700 text-lg font-semibold">
            Name
                    <span className="text-red-500 required-dot">*</span>
                  </label>
              
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
            <label htmlFor="with-indications" className="text-gray-700 text-lg font-semibold">
            Select Image:
                    <span className="text-red-500 required-dot">*</span>
                  </label>
         
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
            <label htmlFor="with-indications" className="text-gray-700 text-lg font-semibold">
            Email address
                    <span className="text-red-500 required-dot">*</span>
                  </label>
            
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="form-control mt-3">
                <div className=" relative ">
                  <label htmlFor="with-indications" className="text-gray-700 text-lg font-semibold">
                    Password
                    <span className="text-red-500 required-dot">*</span>
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleValidPassword}
                      type={showPassword ? "text" : "password"}
                      id="with-indications"
                      className=" w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-900
                       bg-gray-200 text-gray-900 mt-1  border-transparent flex-1 appearance-none 
                         placeholder-gray-400 
                        shadow-sm text-base"
                      name="password"
                      placeholder="*******"

                      required
                    />

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[25%] right-3 cursor-pointer"
                    >
                      {showPassword ? (
                        <AiFillEyeInvisible className="text-2xl "></AiFillEyeInvisible>
                      ) : (
                        <AiFillEye className="text-2xl "></AiFillEye>
                      )}
                    </span>
                  </div>
                  <div
                    ref={verifyRef}
                    className="grid w-full h-1 grid-cols-12 gap-4 mt-3"
                  >
                    <div className="h-full col-span-3 hidden bg-green-500 rounded"></div>
                    <div className="h-full col-span-3 hidden bg-green-500 rounded"></div>
                    <div className="h-full col-span-3 hidden bg-green-500 rounded"></div>
                    <div className="h-full col-span-3 hidden bg-green-500 rounded dark:bg-dark-1"></div>
                  </div>
                  <div className="mt-2 text-green-500">
                    <p
                      className={`${
                        isValid ? "text-green-500" : "text-red-500"
                      } md:text-sm text-xs font-medium`}
                    >
                      {passValidMsg}
                    </p>
                  </div>
                </div>
              </div>
            
          
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-900 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-green-900 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
      <img
        className="max-w-md p-6 rounded-md sm:p-10"
        src="https://images.pexels.com/photos/3660654/pexels-photo-3660654.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
};

export default Registration;
