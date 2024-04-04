import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AuthDetails from "../login/AuthDetails";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavShopUser() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/cart">Cart</Link> {isAuthenticated && <h2>{user.email}</h2>}

          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
   <Link to='/userdetails'>Profile</Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
         
          <AuthDetails />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
