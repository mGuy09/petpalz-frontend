import React, { useEffect, useState } from "react";
import { FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputTemplate from "../Misc/InputTemplate";
import axios from "axios";
import { useAtom } from "jotai";
import { Authenticated } from "../../StateManagement/State";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

const LoginContent = () => {
  const [click, setClick] = useState(false);
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false)
  
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://localhost:7105/api/Users/CurrentUser', {withCredentials: true}).then((res)=>{
        navigate('/pet-sitters&owners')
    })
  },[loggedIn])

  const UpdatePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (e.target.value.length > 1) {
      setError(false)
    }
  };
  const UpdateUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    if (e.target.value.length > 0) {
      setError(false)
    }
  };
  const Submit = () => {
      axios.post(
        "https://localhost:7105/api/Users/Login",
        { username: username, password: password },
        { withCredentials: true }
      ).then(res => {
        console.log(res)
        localStorage.setItem('Auth', true)
        setLoggedIn('true')
        navigate('/pet-sitters&owners', {replace: true})}
      ).catch(onrejected => {
        console.log(onrejected)
        if(onrejected.response.status === 400){
          setError(true)
        }  
      })
  }

  return (
    <div className="relative h-[100vh]">
      <div className="absolute  bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>
      <div
        onClick={() => setClick(true)}
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl  justify-center duration-200 gap-11  ${
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
        <p className={`flex items-center gap-2 select-none text-transparent ${error ? 'text-red-500/100' : ''}`}><AiOutlineExclamationCircle/> Incorrect Username or Password</p>

          <InputTemplate
            Method={UpdateUsername}
            click={click}
            errorList={errorList}
            placeholder={"Username"}
            type={"text"}
            invalid={"usernameInvalid"}
            valid={"usernameValid"}
            isLogin={true}
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
            isLogin={true}
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
