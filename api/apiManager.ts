import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://api.appwrite.io/v1",
  responseType: "json",
  withCredentials: true
});

export default ApiManager