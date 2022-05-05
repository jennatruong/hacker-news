import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0"

// get top story id's, then get & return first "x" stories
export const getStories = async (storyType: String) => {
  console.log("storyType")
  console.log(storyType)
    const response = await axios.get(`${baseURL}/${storyType}.json`);
    const ids = response.data.slice(0, 100);
    const getStories = ids.map((id: Number) => getStory(id));
    return await Promise.all(getStories)
  };

const getStory = async (id: Number) => {
    const response = await axios.get(`${baseURL}/item/${id}.json`);
    return response.data;
  };