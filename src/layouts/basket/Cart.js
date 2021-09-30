import React, { useState } from 'react'
import {Box, Divider, List, ListItemIcon, ListItem, ListItemText, Button, Drawer } from "@material-ui/core";


export default function Cart() {

    const [state, setState] = useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    return (
        <div>
            return (
      <div>
        {[ 'right' ].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              xxxxxxxxxxxxx
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
        </div>
    )
}
