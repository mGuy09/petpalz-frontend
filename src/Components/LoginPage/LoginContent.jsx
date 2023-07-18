import React, { useEffect, useState } from "react";
import { FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputTemplate from "../Misc/InputTemplate";
import axios from "axios";

const LoginContent = () => {
  const [click, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [visible, setVisible] = useState(false);
  
  const navigate = useNavigate()

  const UpdatePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      if (!errorList.includes("passwordInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x != "passwordValid"),
          "passwordInvalid",
        ]);
    } else {
      if (!errorList.includes("passwordValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x != "passwordInvalid"),
          "passwordValid",
        ]);
      }
    }
  };
  const UpdateUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    if (e.target.value.length < 5) {
      if (!errorList.includes("usernameInvalid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x != "usernameValid"),
          "usernameInvalid",
        ]);
      }
    } else {
      if (!errorList.includes("usernameValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x != "usernameInvalid"),
          "usernameValid",
        ]);
      }
    }
  };
  const Submit = () => {
    if (errorList.length > 0) {
      if (!errorList.includes("usernameInvalid") && !errorList.includes('passwordInvalid')) {
        axios.post(
          "https://localhost:7105/api/Users/Login",
          { username: username, password: password },
          { withCredentials: true }
        ).then(res => navigate('/pet-sitters&owners'));
      }
    }
  }

  useEffect(() => {
  }, [errorList]);

  return (
    <div className="relative h-[100vh]">
      <div className="absolute  bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>
      <div
        onClick={() => setClick(true)}
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl  justify-center duration-200 gap-14  ${
          click
            ? "bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110"
            : "bg-black/30"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-3xl font-medium  duration-200 ${
              click ? "text-[#E84855] drop-shadow-md" : "text-white"
            }`}
          >
            Sign In
          </h1>
          <div
            className={`w-[12rem] h-[.20rem] rounded-full  ${
              click ? "bg-[#e84855] drop-shadow-md" : "bg-white"
            }`}
          ></div>
        </div>
        <div className="flex gap-4">
          <button
            className={`border-2 text-white p-2 shadow-md shadow-black/5 duration-200 rounded-full  ${
              click
                ? "bg-sky-600 hover:bg-sky-800 border-transparent"
                : "border-white"
            }`}
          >
            <FaFacebookF size={25} className={`drop-shadow`} />
          </button>
          <button
            className={`border-2  p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-red-600 hover:bg-red-800 border-transparent"
                : "border-white"
            }`}
          >
            <FaGoogle size={25} className={`drop-shadow`} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <InputTemplate
            Method={UpdateUsername}
            click={click}
            errorList={errorList}
            placeholder={"Username"}
            type={"text"}
            invalid={"usernameInvalid"}
            valid={"usernameValid"}
          />
          <InputTemplate
            Method={UpdatePassword}
            isPassword={true}
            click={click}
            errorList={errorList}
            invalid={"passwordInvalid"}
            placeholder={"Password"}
            type={"password"}
            valid={"passwordValid"}
            showPassword={() => setVisible(!visible)}
            visible={visible}
          />
          <Link
            to={""}
            className={`duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Forgot your password?
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={Submit}
            className={`flex gap-2 items-center px-4 py-2 font-medium border-2 duration-200 rounded-full  shadow-md shadow-black/5  ${
              click
                ? "text-[#E84855] border-[#E84855] hover:bg-[#E84855] hover:text-white "
                : "text-white border-white"
            }`}
          >
            Sign In <FaArrowRight size={20} />
          </button>
          <Link
            to={"/Register"}
            className={` duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
