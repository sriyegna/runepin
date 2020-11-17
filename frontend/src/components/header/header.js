import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import "./header.css";

const Header = () => {
  return (
    <div className="root">
      <AppBar>
        <Toolbar>
          <div className="title">
            <Link to="/">
              <img src={logo} alt="RunePin Logo" className="logo" />
            </Link>
          </div>
          <div>
            <Button color="inherit">Discord</Button>
            <Button color="inherit">FAQ</Button>
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className="hiddenAppBar">
        <Toolbar>
          <div className="title">
            <img src={logo} alt="RunePin Logo" className="logo" />
          </div>
          <div>
            <Button color="inherit">Discord</Button>
            <Button color="inherit">FAQ</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
