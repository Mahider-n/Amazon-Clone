import axios from "axios";

const axiosInstance = axios.create({
  // local instance 
    // baseURL: "http://127.0.0.1:5001/clone-c6768/us-central1/api",
    // deployed version of amazon server on render.com
    baseURL:"https://amazon-api-deploy-f9zv.onrender.com"
  });
  
  export { axiosInstance };