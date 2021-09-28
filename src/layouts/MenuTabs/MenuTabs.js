import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
// import registerIcon from "../../assets/register.svg"
// import loginIcon from "../../assets/login.svg"
import { Link } from "react-router-dom";
import "./menu.css"
import { Icon } from "semantic-ui-react";


export default function MenuTabs() {
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
             <Link to="/register" className="menu-tabs">Kayıt Ol <Icon name="user plus" /></Link>
            {/* &nbsp;<img src={registerIcon} style={{ width:"3%" }}/> */}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/login" className="menu-tabs">Giriş Yap <Icon name="sign in" /></Link>
            {/* &nbsp; <img src={loginIcon} style={{ width:"3%" }} /> */}
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}
