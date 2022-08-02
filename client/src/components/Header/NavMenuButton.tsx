import React, { useCallback, useEffect, useRef, useTransition } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export default function NavMenuButton() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const ref = useRef<null | HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [path, setPath] = React.useState<string>(pathname);
  const open = Boolean(anchorEl);
  const [isPending, startTransition] = useTransition();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (destination: string) => {
    handleClose();
    setPath(destination);
  };

  useDidMountEffect(() => {
    if (anchorEl == null) {
      startTransition(() => {
        navigate(`/${path}`);
      });
      // setTimeout(() => {
      //   // TODO: 0.3초 후에도 unmount가 안되었다면?
      //   if (ref.current == null) {
      //     navigate(`/${path}`);
      //   }
      // }, 300);
    }
  }, [path]);

  // useEffect(() => {
  //   if (ref.current) {
  //     const observer = new MutationObserver(() => {
  //       if (ref.current == null) {
  //         navigate(`/${path}`);
  //       }
  //     });
  //     observer.observe(ref.current, { childList: false });
  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, [ref.current]);

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
        ref={ref}
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