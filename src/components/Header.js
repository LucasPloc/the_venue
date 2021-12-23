import { useState, useEffect } from "react";

import { Fragment } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <SideDrawer open={drawerOpen} onClose={(value) => toggleDrawer(value)} />{" "}
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The venue</div>
            <div className="header__logo__title">Musicial events</div>
          </div>
          <IconButton
            onClick={() => toggleDrawer(true)}
            aria-label="Menu"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
