import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  Box,
  Tooltip,
  IconButton,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import { Settings, ExitToApp } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";
import { Icon } from "semantic-ui-react"

export default function UserProfileSetting() {
  var history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [state] = useUserContext();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const userName = localStorage.getItem("userName");

  const userId = state?.authenticatedUser?.id;

  // if (token) {
  var token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  //   if (decodedToken.roles == "ROLE_ADMIN") {

  //   }

  return (
    <div
      className="menu-item"
      style={{ marginRight: "-11rem", marginTop: "-3rem" }}
    >
      <React.Fragment>
        <Box
          sx={{
            display: "contents",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Tooltip title="Hesap Ayarları">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 5, height: 500 }}>
                {userName ? <>{userName[0].toLocaleUpperCase()}</> : null}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          getContentAnchorEl={null}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 220,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemIcon>
              <Avatar fontSize="small" />
            </ListItemIcon>
            <Link to={`/userprofile/${userId}`} style={{ color: "#000" }}>
              {localStorage.getItem("userName")}
            </Link>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Icon name="box" />
            </ListItemIcon>
            <Link to="/orderinformation" style={{ color: "#000" }}>
              Siparişlerim
            </Link>
          </MenuItem>

          <MenuItem>Seçenekler</MenuItem>
          <Divider />

          {/* {  decodedToken.roles == "ROLE_ADMIN" ? <FontAwesomeIcon icon={faWrench} style={{ fontSize: "1.3rem" }} >dfg</FontAwesomeIcon> : null } */}
          

          <MenuItem>
          {decodedToken.roles || "ROLE_ADMIN" || "ROLE_USER"  ? (
             <Link to="/admin" style={{ color: "#000" }}>
           <ListItemIcon>
            <FontAwesomeIcon icon={faWrench} style={{ fontSize: "1.3rem" }} />
            </ListItemIcon>
            Admin Paneli
           </Link>
          ) : null}
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Ayarlar
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp fontSize="small" />
            </ListItemIcon>
            Çıkış Yap
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}
