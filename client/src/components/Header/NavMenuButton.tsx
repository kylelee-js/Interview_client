import React, { useTransition } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import waitForMenuDown from "../../utils/waitForMenuDown";

export default function NavMenuButton() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isPending, startTransition] = useTransition();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = async (destination: string) => {
    handleClose();
    // mui menu 엘리먼트가 사라진 후에 네비게이트
    const isMenuDown = await waitForMenuDown("#basic-menu");
    if (isMenuDown) {
      startTransition(() => {
        navigate(`/${destination}`);
      });
    }
  };

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
