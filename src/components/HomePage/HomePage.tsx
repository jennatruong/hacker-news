import React, { useState, useEffect, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Item  from "../../styles/ItemStyles"
import BoxStyles from "../../styles/BoxStyles"
import NavBar from "../NavBar/NavBar"
import {getStories} from "../../tools/GetStories"
import CircularProgress from '@mui/material/CircularProgress';
import AppContext from "../../context/AppContext";
import { useGlobalState } from '../../state';
import './HomePage.css';


const HomePage = () => {
  // const { id, setId } = useContext(AppContext);
  // const [stories, setStories] = useState(Array());
  // const [pageLoaded, setPageLoaded] = useState(false);
  const [stories, setStories] = useGlobalState("currentStories");
  const [pageLoaded, setPageLoaded] = useGlobalState("loaded");
  const [currentPage, setCurrentPage] = useGlobalState('currentPage')

  //Retrieve stories, then set page loaded to true
  useEffect(() => {
    getStories(currentPage).then((stories) => {
      setStories(stories)
      setPageLoaded("true")
    })
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      {pageLoaded == "false" ? (
       <div style={{display: "flex", alignContent: "center", justifyContent: "center", paddingTop: "250px" }}>
        <CircularProgress/>
       </div>
      ) : (
        <div style={{ backgroundColor: '#E8E8E8'}}>
        <NavBar/>
        <Container maxWidth="md" style={{paddingTop: "70px"}}>
        Current Page: {currentPage}
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