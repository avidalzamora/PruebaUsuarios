import axios from "axios";
const signImageApi = axios.create({
  baseURL: "https://randomuser.me/"
});
signImageApi.interceptors.request.use(config => {
  //const data = getItemParse(VITE_USERKEY);
  const headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
    //ApiKey: VITE_API_TOKEN
  };
  //if(data)
    //headers.Authorization = `Bearer ${data.jwToken}`;
  config.headers = headers;
  return config;
});
export { signImageApi };