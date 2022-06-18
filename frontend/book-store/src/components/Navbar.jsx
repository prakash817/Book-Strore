import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: " grey" }}>
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            indicatorColor="primary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/aboutUs" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
