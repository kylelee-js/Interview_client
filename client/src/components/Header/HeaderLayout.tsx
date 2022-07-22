import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import Logout from "../Login/Logout";
import NavMenu from "./NavMenu";
export default function HeaderLayout() {
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
