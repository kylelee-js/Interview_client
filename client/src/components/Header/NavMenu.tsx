import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { useEffect } from "react";

export default function NavMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [path, setPath] = React.useState<string>("");
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNavigate = (destination: string) => {
    console.log("path :", path, destination);
    setAnchorEl(null);
    setPath(destination);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {}, []);

  useDidMountEffect(() => {
    if (anchorEl == null) {
      navigate(`/${path}`);
    }
  }, [path, anchorEl]);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {pathname !== "/" && (
          <MenuItem onClick={() => handleNavigate("")}>
            내 지원자 보러가기
          </MenuItem>
        )}
        {pathname !== "/pool" && (
          <MenuItem onClick={() => handleNavigate("pool")}>
            지원자 풀 보러가기
          </MenuItem>
        )}
        {pathname !== "/upload" && (
          <MenuItem onClick={() => handleNavigate("upload")}>
            지원자 신규 등록하기
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
