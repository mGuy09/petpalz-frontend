import axios from "axios";
import React, { useEffect, useState } from "react";
import SNOCard from "./SNOCard";
import SNOFilterInput from "./SNOFilterInput";
import SNOSkeleton from "./SNOSkeleton";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { useAtom } from "jotai";
import { Filtering, RatingFilter } from "../../StateManagement/State";
import RatingInput from "../Misc/RatingInput";
import {
  FaSortAmountDown,
  FaSortAmountDownAlt,
  FaSortAmountUp,
} from "react-icons/fa";

const SNOContent = () => {
  const [locations, setLocations] = useState([]);
  const [isLocationsSmall, setLocationsSmall] = useState(true);
  const [filterState, setFilterState] = useState(true);
  const [filter, setFilter] = useAtom(Filtering);
  const [ratingFilter, setRatingFilter] = useAtom(RatingFilter);
  const [qualifications, setQualifications] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([]);
  const [defaultUsers, setDefaultUsers] = useState([]);
  const [reverseUsers, setReverseUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [reverseOrder, setOrder] = useState(false);

  const [filterInputs, setFilterInputs] = useState([]);

  const UpdateFilter = (e) => {
    if (e.target.checked) {
      setFilter((prev) => [...prev, e.target.value]);
    } else {
      setFilter((prev) => [...prev.filter((x) => x !== e.target.value)]);
    }
  };

  const UpdateRatingFilter = (value) => {
    setRatingFilter(value);
  };

  const SortOrder = () => {
    setUsers(users.reverse());
    setOrder(!reverseOrder);
  };

  useEffect(() => {
    if (document.querySelectorAll(".checkbox")) {
      document.querySelectorAll(".checkbox").forEach((x) => {
        if (filter.includes(x.value)) x.checked = true;
      });
    }
  }, [filter, filterState, isLocationsSmall]);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", {
        country: "romania",
      })
      .then((res) => {
        setLocations(res.data.data.states);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/Users/CurrentUser", {
        withCredentials: true,
      })
      .then((res) => {
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
        setServices(
          currentUser
            ? res.data.filter((x) =>
              currentUser.userType === "petSitter"
                ? x.isForOwner === true
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
            // console.log(res.data);
            setUsers(res.data);
          });
      } else {
        axios
          .get("https://localhost:7105/api/Users/AllPetSitters", {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
            setUsers(res.data);
          });
      }
    }
  }, [currentUser]);
  return (
    <div className=" w-full duration-300 transition-all pt-[3.5rem] flex justify-between">
      {/* Filter */}
      <div className="fixed w-[3%] text-white bg-[#280000] py-10 duration-200 flex justify-center h-full">
        <BsArrowBarRight
          onClick={() => setFilterState(true)}
          size={25}
          className={`duration-200 ${filterState ? "invisible rotate-180" : "visible"
            }`}
        />
      </div>
      <div
        className={`flex flex-col gap-10 w-1/5 border-b-2 border-b-[#c4c0b1] duration-300 bg-[#280000] p-10 z-[1]  ${!filterState ? "-translate-x-full " : ""
          }`}
      >
        <div className="flex font-medium text-white pb-10 w-full items-center justify-between">
          <h1 className="text-2xl">Filter</h1>
          <BsArrowBarLeft
            onClick={() => setFilterState(!filterState)}
            size={25}
            className={`duration-200 ${!filterState ? "translate-x-[320%] rotate-180 invisible" : ""
              }`}
          />
        </div>
        <div className="text-white pt-5 border-t-2 border-t-white flex items-center justify-between">
          <h1 className="text-lg font-medium">Sorting</h1>
          <FaSortAmountDown
            onClick={() => {
              SortOrder();
            }}
            size={25}
            className={`hover:scale-105 active:scale-95 delay-200 duration-150 ${reverseOrder && "hidden"
              }`}
          />
          <FaSortAmountDownAlt
            onClick={() => {
              SortOrder();
            }}
            size={25}
            className={`hover:scale-105 active:scale-95 delay-200 duration-150 ${!reverseOrder && "hidden"
              }`}
          />
        </div>
        <div className="flex flex-col border-t-2 border-t-white pt-5 items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Location</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {locations.length !== 0 ? (
              isLocationsSmall ? (
                locations
                  .slice(0, 6)
                  .map((state) => (
                    <SNOFilterInput
                      callback={UpdateFilter}
                      key={state.state_code}
                      filterId={state.state_code}
                      filterName={state.name.replace(" County", "")}
                    />
                  ))
              ) : (
                locations.map((state) => (
                  <SNOFilterInput
                    callback={UpdateFilter}
                    key={state.state_code}
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
        {currentUser ? currentUser.userType === "petSitter" ? '' : <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Qualifications</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {qualifications.length === 0 ? (
              <SNOSkeleton />
            ) : (
              qualifications.map((x) => (
                <SNOFilterInput
                  callback={UpdateFilter}
                  filterId={x.id + 'q'}
                  filterName={x.name}
                  key={"q-" + x.name}
                />
              ))
            )}
          </div>
        </div> : ''}

        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-lg font-medium text-white">Services</h1>
          <div className="flex flex-wrap duration-300 gap-x-4">
            {services.length !== 0 ? (
              services.map((x) => (
                <SNOFilterInput
                  callback={UpdateFilter}
                  filterId={x.id + 's'}
                  filterName={x.name}
                  key={"s-" + x.name}
                />
              ))
            ) : (
              <SNOSkeleton />
            )}
          </div>
        </div>

        <div>
          <h1 className="text-lg font-medium text-white pb-5">Rating</h1>
          <RatingInput callback={UpdateRatingFilter} />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col duration-300 gap-[8rem] py-10 items-center justify-start my-10 ${filterState ? "px-16" : "-translate-x-20 px-0"
          }`}
      >
        {users.length > 0 ? (
          filter.length > 0 ? (
            services.filter((x) => filter.includes(x.name)).length > 0 ? (
              users[0].qualifications !== null ? (
                ratingFilter > 0 ? (
                  users
                    .filter((x) =>
                      x.qualifications.filter(
                        (q) => filter.includes(q.name).length > 0
                      )
                    )
                    .filter((x) => filter.includes(x.serviceType.name))
                    .filter((x) => x.rating.rating >= ratingFilter)
                    .map((x) => (
                      <SNOCard
                        info={x}
                        isPetSitter={x.userType === "petSitter" ? true : false}
                        key={"c-" + x.userName}
                      />
                    ))
                ) : (
                  users
                    .filter((x) =>
                      x.qualifications.filter(
                        (q) => filter.includes(q.name).length > 0
                      )
                    )
                    .filter((x) => filter.includes(x.serviceType.name))
                    .map((x) => (
                      <SNOCard
                        info={x}
                        isPetSitter={x.userType === "petSitter" ? true : false}
                        key={"c-" + x.userName}
                      />
                    ))
                )
              ) : ratingFilter > 0 ? (
                users
                  .filter((x) => filter.includes(x.serviceType.name))
                  .filter((x) => x.rating.rating >= ratingFilter)
                  .map((x) => <SNOCard info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName} />)
              ) : (
                users
                  .filter((x) => filter.includes(x.serviceType.name))
                  .map((x) => <SNOCard info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName} />)
              )
            ) : users[0].qualifications !== null && ratingFilter > 0 ? (
              users
                .filter(
                  (x) =>
                    x.qualifications.filter((q) => filter.includes(q.name))
                      .length > 0
                )
                .filter((x) => x.rating.rating >= ratingFilter)
                .map((x) => (
                  <SNOCard
                    info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName}
                  />
                ))
            ) : ratingFilter > 0 ? (
              users
                .filter(
                  (x) =>
                    x.qualifications.filter((q) => filter.includes(q.name))
                      .length > 0
                )
                .filter((x) => x.rating.rating >= ratingFilter)
                .map((x) => (
                  <SNOCard
                    info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName}
                  />
                ))
            ) : ratingFilter > 0 ? (
              users
                .filter(
                  (x) =>
                    x.qualifications.filter((q) => filter.includes(q.name))
                      .length > 0
                )
                .filter((x) => x.rating.rating >= ratingFilter)
                .map((x) => (
                  <SNOCard
                    info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName}
                  />
                ))
            ) : (
              users
                .filter(
                  (x) =>
                    x.qualifications.filter((q) => filter.includes(q.name))
                      .length > 0
                )
                .map((x) => (
                  <SNOCard
                    info={x}
                    isPetSitter={x.userType === "petSitter" ? true : false}
                    key={"c-" + x.userName}
                  />
                ))
            )
          ) : ratingFilter > 0 ? (
            users
              .filter((x) => x.rating.rating >= ratingFilter)
              .map((x) => (
                <SNOCard
                  info={x}
                  isPetSitter={x.userType === "petSitter" ? true : false}
                  key={"c-" + x.userName}
                />
              ))
          ) : (
            users.map((x) => (
              <SNOCard
                info={x}
                isPetSitter={x.userType === "petSitter" ? true : false}
                key={"c-" + x.userName}
              />
            ))
          )
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
