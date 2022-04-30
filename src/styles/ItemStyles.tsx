
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#ffc87c",
    padding: 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

export default Item;