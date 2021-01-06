import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/CLSixteen/real-world-vue",
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events/");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  }
};
