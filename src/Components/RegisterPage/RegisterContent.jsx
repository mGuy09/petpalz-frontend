import React, { useEffect, useState } from "react";
import { FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputTemplate from "../Misc/InputTemplate";
import axios from "axios";

const RegisterContent = () => {
  const [click, setClick] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const GetVisible = (callback) => {
    setVisible(callback);
  };

  const OnSubmit = () => {
    if (CanSubmit) {
      axios
        .post("https://localhost:7105/api/Users/AddNewUser", {
          email: email,
          userName: username,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then((res) => {
          if (res.status === 201) {
            axios.post("https://localhost:7105/api/Users/Login", { username: res.data.userName, password: password }, {withCredentials: true}).then(res => navigate('/create-profile'))
          }
        });
    }
  };

  const CanSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phoneNumber === ""
    ) {
      return false;
    }
    if (errorList.length === 0) return false;
    errorList.forEach((x) => {
      if (x.includes("Invalid")) {
        return false;
      }
    });
    return true;
  };

  const UpdateFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    if (!/^[A-Z][a-z]*$/.test(firstName) || "") {
      if (!errorList.includes("fNameInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "fNameValid"),
          "fNameInvalid",
        ]);
    } else {
      if (!errorList.includes("fNameValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "fNameInvalid"),
          "fNameValid",
        ]);
      }
    }
  };
  const UpdateLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
    if (!/^[A-Z][a-z]*$/.test(e.target.value)) {
      if (!errorList.includes("lNameInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "lNameValid"),
          "lNameInvalid",
        ]);
    } else {
      if (!errorList.includes("lNameValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "lNameInvalid"),
          "lNameValid",
        ]);
      }
    }
  };
  const UpdateUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    if (!/^[a-zA-Z0-9_]{6,}$/.test(e.target.value)) {
      if (!errorList.includes("usernameInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "usernameValid"),
          "usernameInvalid",
        ]);
    } else {
      if (!errorList.includes("usernameValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "usernameInvalid"),
          "usernameValid",
        ]);
      }
    }
  };
  const UpdateEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    if (
      !/^[^\s@]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)$/i.test(
        e.target.value
      )
    ) {
      if (!errorList.includes("emailInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "emailValid"),
          "emailInvalid",
        ]);
    } else {
      if (!errorList.includes("emailValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "emailInvalid"),
          "emailValid",
        ]);
      }
    }
  };
  const UpdatePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/.test(
        e.target.value
      )
    ) {
      if (!errorList.includes("passwordInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "passwordValid"),
          "passwordInvalid",
        ]);
    } else {
      if (!errorList.includes("passwordValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "passwordInvalid"),
          "passwordValid",
        ]);
      }
    }
  };
  const UpdateConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/.test(
        e.target.value
      ) ||
      password !== e.target.value
    ) {
      if (!errorList.includes("confirmPasswordInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "confirmPasswordValid"),
          "confirmPasswordInvalid",
        ]);
    } else {
      if (!errorList.includes("confirmPasswordValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "confirmPasswordInvalid"),
          "confirmPasswordValid",
        ]);
      }
    }
  };

  const UpdatePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
    if (!/^(07\d{8}|03\d{8})$/.test(e.target.value)) {
      if (!errorList.includes("phoneNumberInvalid"))
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "phoneNumberValid"),
          "phoneNumberInvalid",
        ]);
    } else {
      if (!errorList.includes("phoneNumberValid")) {
        setErrorList((prev) => [
          ...prev.filter((x) => x !== "phoneNumberInvalid"),
          "phoneNumberValid",
        ]);
      }
    }
  };

  useEffect(() => {
    console.log(errorList);
  }, [errorList]);

  return (
    <div className="relative h-[110vh]">
      <div className="absolute  bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>
      <div
        onClick={() => setClick(true)}
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[48rem] rounded-2xl  justify-center duration-200 gap-14  ${
          click
            ? "bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110"
            : "bg-black/30"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-3xl font-medium duration-200 ${
              click ? "text-[#E84855]/100 drop-shadow-md" : "text-white"
            }`}
          >
            Sign Up
          </h1>
          <div
            className={`w-[12rem] h-[.20rem] rounded-full  ${
              click ? "bg-[#e84855] drop-shadow-md" : "bg-white"
            }`}
          ></div>
        </div>
        <div className="flex gap-4">
          <button
            className={`border-2  p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-sky-600 hover:bg-sky-800 border-white/0"
                : "border-white"
            }`}
          >
            <FaFacebookF size={25} className={`drop-shadow`} />
          </button>
          <button
            className={`border-2 border-white p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-red-600 hover:bg-red-800 border-white/0 hover:text-white"
                : ""
            }`}
          >
            <FaGoogle size={25} className={`drop-shadow`} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-7">
            <InputTemplate
              Method={UpdateFirstName}
              errorList={errorList}
              invalid={"fNameInvalid"}
              valid={"fNameValid"}
              placeholder={"First Name"}
              type={"text"}
              click={click}
            />
            <InputTemplate
              Method={UpdateLastName}
              errorList={errorList}
              invalid={"lNameInvalid"}
              valid={"lNameValid"}
              placeholder={"Last Name"}
              type={"text"}
              click={click}
            />
          </div>
          <div className="flex gap-7">
            <InputTemplate
              Method={UpdateUsername}
              errorList={errorList}
              invalid={"usernameInvalid"}
              valid={"usernameValid"}
              placeholder={"Username"}
              type={"text"}
              click={click}
            />

            <InputTemplate
              Method={UpdateEmail}
              errorList={errorList}
              invalid={"emailInvalid"}
              valid={"emailValid"}
              placeholder={"Email Address"}
              type={"text"}
              click={click}
            />
          </div>
          <div className="flex gap-7">
            <InputTemplate
              Method={UpdatePassword}
              errorList={errorList}
              invalid={"passwordInvalid"}
              valid={"passwordValid"}
              placeholder={"Password"}
              type={"password"}
              click={click}
              isPassword={true}
              showPassword={() => setVisible(!visible)}
              visible={visible}
            />
            <div className="flex gap-2">
              <InputTemplate
                Method={UpdateConfirmPassword}
                errorList={errorList}
                invalid={"confirmPasswordInvalid"}
                valid={"confirmPasswordValid"}
                placeholder={"Confirm Password"}
                type={"password"}
                click={click}
                  visible={visible}
              />
            </div>
          </div>
          <InputTemplate
            Method={UpdatePhoneNumber}
            errorList={errorList}
            invalid={"phoneNumberInvalid"}
            valid={"phoneNumberValid"}
            placeholder={"Phone Number"}
            type={"text"}
            click={click}
            callback={GetVisible}
            isPhoneNumber={true}
          />
          <Link
            to={"/Login"}
            className={` duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Already got an account?
          </Link>
        </div>
        <button
          className={`flex gap-2 items-center px-4 py-2 font-medium border-2 duration-200 rounded-full  shadow-md shadow-black/5  ${
            click
              ? "text-[#E84855] hover:text-white border-[#E84855] hover:bg-[#E84855] "
              : "text-white border-white"
          }`}
          onClick={OnSubmit}
        >
          Sign Up <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RegisterContent;
