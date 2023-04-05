import { atom } from "jotai";

const Authenticated = atom(localStorage.getItem('authenticated') ? true : false)

export default Authenticated