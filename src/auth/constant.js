import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const REGISTRATION = "REGISTRATION";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const LOGIN = "LOGIN";
export const SUPERLOGIN = "SUPERLOGIN";
export const ADMINLOGIN = "ADMINLOGIN";
export const SET_NAME = "SET_NAME";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
// export const NEWIMAGE_UPLOAD = "NEWIMAGE_UPLOAD";
export const HANDLEDRAWER = "HANDLEDRAWER";
// export const SET_HOME = "SET_HOME";
export const HANDLEDRAWER1 = "HANDLEDRAWER1";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const SUCESSFUL = "SUCESSFUL";
export const VERIFY_OTP = "VERIFY_OTP";
export const IMAGE_UPLOAD = "IMAGE_UPLOAD";
export const ALL_HOTELS = "ALL_HOTELS";
export const SETALL = "SETALL";
export const TOURISMLOGIN = "TOURISMLOGIN";
export const SET_ADMIN_ID = "SET_ADMIN_ID";
export const SETACTIVE = "SETACTIVE";
export const SETPROFILE = "SETPROFILE";
export const firebaseConfig = {
  apiKey: "AIzaSyDNgG7JCO02FlUKc3KIofIZ5DvL0vpK0tk",
  authDomain: "kidtryz-55f4e.firebaseapp.com",
  projectId: "kidtryz-55f4e",
  storageBucket: "kidtryz-55f4e.appspot.com",
  messagingSenderId: "46527351358",
  appId: "1:46527351358:web:bbfc36647edbccb43fdf6f",
  measurementId: "G-4GKW918YWY",
};
export const app = initializeApp(firebaseConfig);
// export const fb = firebase.initializeApp(firebaseConfig);
