import axios from "axios";

const KEY = "AIzaSyD_yEkGxe2GPaJ4Cck3qsNqSuDY81rWsrw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
