import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("accessToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  if (!token) {
    alert("Please login first!");
  }

  console.log("config object is:", config);
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    console.log("Interceptor sucess!");
    console.log("axclient repsonse is:", response.data);
    return response;
  },

  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
