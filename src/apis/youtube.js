import axios from "axios";

const KEY = "AIzaSyCBZ7MZb75ty0rJfriRWg3fVcfjOG6_3G8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
