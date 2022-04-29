
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [stories, setStories] = useState(Array());
  const [pageLoading, setPageLoading] = useState(false);


  useEffect(() => {
    getStories();
  }, []);
  

  const getStories = async () => {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
    const ids = response.data.slice(0, 4)
    const getStories = ids.map((id: Number) => getStory2(id))
    const getResults = await Promise.all(getStories)
    setPageLoading(true)
    setStories(getResults)
  };

  const getStory2 = async (id: Number) => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return response.data
  };
  

  return (
    <div className="App">
       {pageLoading && (
          <header className="App-header">
            <h2>Stories</h2>
            {/* Story: {stories[0].id} */}
            {stories.map(({id, title}) => (
              <p key={id}> {title}</p>
            ))}
          </header>
       )}
    </div>
  );
}

export default App;