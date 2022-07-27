import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import Logout from "../Login/Logout";
import NavMenu from "./NavMenu";
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

export default function HeaderLayout() {
  const dispatch = useAppDispatch();
  // 활동중 상태 변경이 감지되었을 때
  const changeAlarm = useAppSelector((state) => state.auth.user?.isChanged);
  // 로그인 시 상태 변경이 감지되었을 때
  const loginChangeAlarm = useAppSelector(
    (state) => state.auth.user?.onLoginChange
  );

  useEffect(() => {
    if (!loginChangeAlarm) {
      const onFetch = async () => {
        const notice = await onUserNotice();
        console.log(notice);
        dispatch(onNotice(notice));
      };
      onFetch();
      const scheduler = setInterval(onFetch, 10000);
      return () => {
        clearInterval(scheduler);
      };
    }
  }, []);

  const onNoticeClick = () => {
    console.log("clicked");
    dispatch(onTrigger());
    dispatch(onNoticeFalse());
  };

  const onLoginNoticeClick = () => {
    console.log("login clicked");
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
              <NavMenu />

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Jobreeting
              </Typography>
              {changeAlarm && !loginChangeAlarm && (
                <Typography sx={{ flexGrow: 1 }}>
                  나의 지원자 상태에 변경이 있습니다. 이
                  <button onClick={onNoticeClick}>버튼</button>을 눌러주세요.
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
