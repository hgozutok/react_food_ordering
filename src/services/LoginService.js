import axios from "axios";
import * as ApiUrl from "../constants/ApiUrl";

async function loginUser(user) {
  console.log(ApiUrl.userLogin);
  return await axios.post(ApiUrl.userLogin, user);
}

async function registerUser(user) {
  return await axios.post(ApiUrl.userRegister, user);
}

async function GetUser(user) {
  return await axios.get(ApiUrl.userLogin + user);
}

async function GetAllUsers() {
  return await axios.get("http://localhost:8080/api/users");
}

export { loginUser, registerUser, GetUser, GetAllUsers };
