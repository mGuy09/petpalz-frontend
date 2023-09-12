import { atom } from "jotai";

export const Authenticated = atom(localStorage.getItem('Auth'))
export const UserType = atom(localStorage.getItem('userType'))
export const Filtering = atom([])
export const RatingFilter = atom(0)
