import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0"

export const getStories = async () => {
    const response = await axios.get(`${baseURL}/newstories.json`);
    const ids = response.data.slice(0, 100);
    const getStories = ids.map((id: Number) => getStory2(id));
    return await Promise.all(getStories)
  };

const getStory2 = async (id: Number) => {
    const response = await axios.get(`${baseURL}/item/${id}.json`);
    return response.data;
  };