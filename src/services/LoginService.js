import axios from "axios";
import * as ApiUrl from "../constants/ApiUrl";

export async function loginUser(user) {
  console.log(ApiUrl.userLogin);
  return await axios.post(ApiUrl.userLogin, user);
}

async function RegisterUser(user) {
  return await axios.post(ApiUrl.userRegister, user);
}

async function GetUser(user) {
  return await axios.get("http://localhost:8080/api/user/" + user);
}

async function GetAllUsers() {
  return await axios.get("http://localhost:8080/api/users");
}

export default { loginUser, RegisterUser, GetUser, GetAllUsers };
