import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Item  from "../styles/ItemStyles"
import BoxStyles from "../styles/BoxStyles"
import NavBar from "../components/NavBar/NavBar"
import './HomePage.css';


const HomePage = () => {
  const [stories, setStories] = useState(Array());
  const [pageLoaded, setPageLoaded] = useState(false);

  const baseURL = "https://hacker-news.firebaseio.com/v0"

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const response = await axios.get(`${baseURL}/newstories.json`);
    const ids = response.data.slice(0, 100);
    const getStories = ids.map((id: Number) => getStory2(id));
    setStories(await Promise.all(getStories));
    setPageLoaded(true);
  };

  const getStory2 = async (id: Number) => {
    const response = await axios.get(`${baseURL}/item/${id}.json`);
    return response.data;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {pageLoaded && (
        <div style={{ backgroundColor: '#E8E8E8'}}>
        <NavBar/>
        <Container maxWidth="md" style={{paddingTop: "70px"}}>
        
          {stories.map(({ id, title, url, score }) => (
            <BoxStyles sx={{spacing: 8, m: 1}}>
              <Box
                sx={{ width: "10%", paddingLeft: "10px", paddingRight: "10px" }}
              >
                <Stack>
                  <Item>{score} Points</Item>
                </Stack>
              </Box>
              <Box
                sx={{
                  color: "#A52A2A",
                  fontSize: 20,
                  fontWeight: "medium"
                }}
              >
                <div key={id}>
                  <a className="link" href={url}>{title}</a>
                </div>
              </Box>
            </BoxStyles>
          ))}
        </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;