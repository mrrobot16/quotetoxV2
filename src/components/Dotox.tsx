import React, { useEffect } from "react";

import {
  Box,
  Typography,

} from "@material-ui/core";

import { calculateDays } from "services/detox";

function Dotox() {
  const pushupsDate = "2021-01-04";
  
  const componentDidMount = () => {
    // getDotoxes();
  }

  // const getDotoxes = () => {
  // In the future we are gonna have all the Dotoxes object in a server.
  // }

  useEffect(componentDidMount, []);

  return (
    <Box m={1}>
      <Box>
        Days JUST DO IT: 
        <Typography variant="subtitle2">
          { calculateDays(pushupsDate) }
        </Typography>
      </Box>
    </Box>
  );
}

export default Dotox;