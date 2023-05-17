import axios from "axios";
import React, { useEffect, useState } from "react";
import SNOCard from "./SNOCard";
import SNOFilterInput from "./SNOFilterInput";
import SNOSkeleton from "./SNOSkeleton";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

const SNOContent = () => {
  const [locations, setLocations] = useState([]);
  const [isLocationsSmall, setLocationsSmall] = useState(true);
  const [filterState, setFilterState] = useState(true);
  const [qualifications, setQualifications] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", {
        country: "romania",
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data.states.slice(0, 5));
        setLocations(res.data.data.states);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/Users/CurrentUser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("Auth", true);
        setCurrentUser(res.data);
      })
      .then(
        axios
          .get("https://localhost:7105/api/Qualifications", {
            withCredentials: true,
          })
          .then((res) => setQualifications(res.data))
          .then()
      );
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/ServiceTypes", { withCredentials: true })
      .then((res) => {
        console.log(res);
        setServices(
          currentUser
            ? res.data.filter((x) =>
                currentUser.userType.name === "petSitter"
                  ? x.isForOwner
                  : x.isForOwner === false
              )
            : []
        );
      });
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.userType === "petSitter") {
        axios
          .get("https://localhost:7105/api/Users/AllPetOwners", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setUsers(res.data);
          });
      } else {
        axios
          .get("https://localhost:7105/api/Users/AllPetSitters", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setUsers(res.data);
          });
      }
    }
  }, [currentUser]);
  return (
    <div className=" w-[full] duration-300 transition-all pt-[3.5rem] flex justify-between">
      {/* Filter */}
      <div className="fixed w-[3%] text-white bg-[#280000] py-10 duration-200 flex justify-center h-full">
        <BsArrowBarRight
          onClick={() => setFilterState(true)}
          size={25}
          className={`duration-200 ${
            filterState ? "invisible rotate-180" : "visible"
          }`}
        />
      </div>
      <div
        className={`flex flex-col gap-16 w-[33%] border-b-2 border-b-[#c4c0b1] duration-300 bg-[#280000] p-10 z-[1]  ${
          !filterState ? "-translate-x-full " : ""
        }`}
      >
        <div className="flex font-medium text-white w-full items-center justify-between">
          <h1 className="text-2xl">Filter</h1>
          <BsArrowBarLeft
            onClick={() => setFilterState(!filterState)}
            size={25}
            className={`duration-200 ${
              !filterState ? "translate-x-[320%] rotate-180 invisible" : ""
            }`}
          />
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Location</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {locations.length !== 0 ? (
              isLocationsSmall ? (
                locations
                  .slice(0, 6)
                  .map((state) => (
                    <SNOFilterInput
                      filterId={state.state_code}
                      filterName={state.name.replace(" County", "")}
                    />
                  ))
              ) : (
                locations.map((state) => (
                  <SNOFilterInput
                    filterId={state.state_code}
                    filterName={state.name.replace(" County", "")}
                  />
                ))
              )
            ) : (
              <SNOSkeleton />
            )}
          </div>
          <button
            onClick={() => setLocationsSmall(!isLocationsSmall)}
            className={"text-white underline underline-offset-[3px]"}
          >
            {isLocationsSmall ? "Show More" : "Show Less"}
          </button>
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Qualifications</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {qualifications.length === 0 ? (
              <SNOSkeleton />
            ) : (
              qualifications.map((x) => (
                <SNOFilterInput
                  filterId={x.id}
                  filterName={x.name}
                  key={"q-" + x.name}
                />
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Services</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {services.length !== 0 ? (
              services.map((x) => (
                <SNOFilterInput
                  filterId={x.id}
                  filterName={x.name}
                  key={"q-" + x.name}
                />
              ))
            ) : (
              <SNOSkeleton />
            )}
          </div>
        </div>

        <div>
          <h1 className="text-lg font-medium text-white">Rating</h1>
          <SNOFilterInput filterId={"rating"} filterName={"Rating"} />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col duration-300 gap-[8rem] py-10 items-center justify-start my-10 ${
          filterState ? "px-16" : "-translate-x-20 px-0"
        }`}
      >
        {users.length != 0 ? (
          users.map((x) => (
            <SNOCard
              key={"c-" + x.userName}
              info={x}
              isPetSitter={x.userType === 'petSitter' ? true : false}
            />
          ))
        ) : (
          <>
            <SNOCard skeleton={true} />
            <SNOCard skeleton={true} />
            <SNOCard skeleton={true} />
          </>
        )}
      </div>
    </div>
  );
};

export default SNOContent;
