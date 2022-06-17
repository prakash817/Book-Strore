import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>
          <Tabs sx={{ ml: "auto" }}>
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/aboutUs" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
