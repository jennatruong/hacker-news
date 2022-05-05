import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StyledButton from "@mui/material/Button";
import AppContext from "../../context/AppContext";
import {getStories} from "../../tools/GetStories";
import './NavBar.css';
import { useGlobalState } from '../../state';

const NavBar = () => {
    // const { id, setId } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useGlobalState("currentPage");
  const [activeButton, setActiveButton] = useGlobalState("selectedButton");
  const [pageLoaded, setPageLoaded] = useGlobalState("loaded");
  const [stories, setStories] = useGlobalState("currentStories");

  const pages = ["New Stories", "Top Stories", "Best Stories"];
  let selectedPage: string;

  const handleClick= (pageTitle: string) => {
    setActiveButton((b) => pageTitle)
      if (pageTitle === "New Stories"){
        selectedPage = "newstories"
      } else if (pageTitle === "Top Stories") {
        selectedPage = "topstories"
      } else ( selectedPage = "beststories");
      setCurrentPage((p) => selectedPage);
      resetStories()
  };

  function resetStories() {
    getStories(selectedPage).then((stories) => {
      setStories(stories)
  })}


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
              <StyledButton
              title="button"
              className = "activeButton"
              key={page}
              onClick={() => handleClick(page)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </StyledButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
