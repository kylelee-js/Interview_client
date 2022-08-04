import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Outlet, useNavigate } from "react-router-dom";
import Logout from "../Login/Logout";
import NavMenuButton from "./NavMenuButton";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { onUserNotice } from "../../api/boardUpdate";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  onLoginNoticeFalse,
  onNotice,
  onNoticeFalse,
} from "../Login/authSlice";
import { onTrigger } from "./triggerFetchSlice";
import styled from "styled-components";
import SearchInput from "./SearchForm/SearchInput";
import useInterval from "../../hooks/useInterval";

const LinkAnchor = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: underline;
  background-color: transparent;
  color: blue;
  font-size: 16px;
  padding-right: 5px;
  transition: all ease-in-out 0.3s;
  border-radius: 3px;
  &:hover {
    background-color: rgba(39, 168, 245, 0.44);
    color: whitesmoke;
    text-decoration: none;
  }
`;

export default function HeaderLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // 활동중 상태 변경이 감지되었을 때
  const changeAlarm = useAppSelector((state) => state.auth.user?.isChanged);
  // 로그인 시 상태 변경이 감지되었을 때
  const loginChangeAlarm = useAppSelector(
    (state) => state.auth.user?.onLoginChange
  );

  const onFetch = async () => {
    const notice = await onUserNotice();
    dispatch(onNotice(notice));
  };

  useInterval(() => {
    if (!loginChangeAlarm) {
      onFetch();
    }
  }, 10000);

  const onNoticeClick = () => {
    dispatch(onTrigger());
    dispatch(onNoticeFalse());
    navigate("/");
  };

  const onLoginNoticeClick = () => {
    dispatch(onNoticeFalse());
    dispatch(onLoginNoticeFalse());
  };

  return (
    <>
      <header style={{ marginBottom: "30px" }}>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <NavMenuButton />

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Jobreeting
              </Typography>
              {changeAlarm && !loginChangeAlarm && (
                <Typography sx={{ flexGrow: 1 }}>
                  나의 지원자 상태에 변경이 있습니다.
                  <LinkAnchor onClick={onNoticeClick}>여기</LinkAnchor>를 눌러
                  확인하세요.
                </Typography>
              )}
              {loginChangeAlarm && (
                <Typography
                  style={{ position: "relative" }}
                  sx={{ flexGrow: 1 }}
                >
                  나의 지원자 상태에 변경이 있었습니다.{" "}
                  <IconButton onClick={onLoginNoticeClick} aria-label="delete">
                    <CancelIcon
                      style={{
                        position: "absolute",
                        color: "whitesmoke",
                        top: "-5px",
                        left: "5px",
                      }}
                    />
                  </IconButton>
                </Typography>
              )}
              <SearchInput />
              <Logout />
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
