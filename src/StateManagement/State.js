import { atom } from "jotai";

export const Authenticated = atom(localStorage.getItem('authenticated') ? true : false)
export const UserType = atom(localStorage.getItem('userType'))

