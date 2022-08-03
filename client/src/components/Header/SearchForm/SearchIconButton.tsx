import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchIconButtonPropsType = {
  isDate: boolean;
};

export default function SearchIconButton({
  isDate,
}: SearchIconButtonPropsType) {
  return (
    <IconButton type="submit" aria-label="delete">
      <SearchIcon
        style={{
          position: "absolute",
          color: "#1876d1",
          top: "-3px",
          left: isDate ? "-87px" : "-50px",
        }}
      />
    </IconButton>
  );
}
