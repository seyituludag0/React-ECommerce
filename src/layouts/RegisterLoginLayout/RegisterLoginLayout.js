import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
// import registerIcon from "../../assets/register.svg"
// import loginIcon from "../../assets/login.svg"
import { Link } from "react-router-dom";
import "./menu.css"
import { Icon } from "semantic-ui-react";


export default function RegisterLoginLayout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Kayıt Ol / Giriş Yap
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="my-menu" style={{ top: "60px", left: "1094px" }}>
          <MenuItem onClick={handleClose}>
             <Link to="/register" className="menu-tabs" style={{color:"black"}}>Kayıt Ol <Icon name="user plus" /></Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/login" className="menu-tabs" style={{color:"black"}}>Giriş Yap <Icon name="sign in" /></Link>
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}
