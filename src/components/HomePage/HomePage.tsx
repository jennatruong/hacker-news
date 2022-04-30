import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Item  from "../../styles/ItemStyles"
import BoxStyles from "../../styles/BoxStyles"
import NavBar from "../NavBar/NavBar"
import {getStories} from "../../tools/GetStories"
import './HomePage.css';


const HomePage = () => {
  const [stories, setStories] = useState(Array());
  const [pageLoaded, setPageLoaded] = useState(false);

  //Retrieve stories, then set page loaded to true
  useEffect(() => {
    getStories().then((stories) => {
      setStories(stories)
      setPageLoaded(true)
    })
  }, []);

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