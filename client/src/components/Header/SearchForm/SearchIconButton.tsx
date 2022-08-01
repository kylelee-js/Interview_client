import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchIconButton() {
  return (
    <IconButton type="submit" aria-label="delete">
      <SearchIcon
        style={{
          position: "absolute",
          color: "#1876d1",
          top: "-3px",
          left: "-50px",
        }}
      />
    </IconButton>
  );
}
