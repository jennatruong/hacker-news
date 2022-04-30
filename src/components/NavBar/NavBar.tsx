import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


const NavBar = () => {

  const pages = ["New Stories", "Top Stories", "Best Stories"];

  const handleClick = () => {
    //do something
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
                key={page}
                // onClick={handleClick}
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
