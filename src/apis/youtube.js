import axios from "axios";

const KEY = "AIzaSyBk0NwcKBqiKkiOri8JYLjD2mVLZ4edm3E";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
