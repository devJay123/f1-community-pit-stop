import axios from "axios";

const instance = axios.create({
  // baseURL:
  //   "https://port-0-f1-community-pit-stop-server-ly5p232t0b63615b.sel5.cloudtype.app", // proxy설정과 동일하게 baseURL(기본 URL)값 설정
  baseURL: "http://localhost:8000",
});

export default instance;
