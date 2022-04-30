import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


const NavBar = () => {
  const pages = ["New Stories", "Top Stories", "Best Stories"];

  //For writing a simple test on button click:
  const handleClick= (pageTitle: String) => {
      console.log(pageTitle)
  };

  return (
    <AppBar style={{backgroundColor: '#ff7518'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, ml: 1, display: { md: "flex" }}}
          >
            HACKER NEWS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "flex" }}}>
            {pages.map(page => (
              <Button
                title="button"
                key={page}
                onClick={() => handleClick(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
