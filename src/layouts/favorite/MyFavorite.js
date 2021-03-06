import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  Box,
  Tooltip,
  IconButton,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import FavoriteItem from "./favoriteItem/FavoriteItem";
// import FavoriteService from "../../services/FavoriteService";


export default function MyFavorite() {

  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <Box
        sx={{ display: "contents", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Favorilerim">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <FavoriteBorder />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        style={{ marginTop: "1rem" }} className="hopbala"
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
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
              top: 0,
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
          <FavoriteItem />
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}
