import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CastleIcon from "@mui/icons-material/Castle";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "35%",
  padding: "3px 10px",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <b>
            <i>InstaShare</i>
          </b>
        </Typography>
        <CastleIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search bgcolor={"background.default"}>
          <InputBase placeholder="Search ..." />
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1660860551406-058a71e20e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1660860551406-058a71e20e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Typography variant="span">Remy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
