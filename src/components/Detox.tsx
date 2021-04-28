import React, { useEffect } from "react";

import {
  Box,
  Typography,

} from "@material-ui/core";

import { calculateDays } from "services/detox";

const styles = {
  color: "green",
  fontWeight: 600,

}

function Detox() {
  const alcDate = "2016-01-17";
  const cigDate = "2020-10-20";
  const cannabisTempDate = "2021-05-10";

  const componentDidMount = () => {
    getDetoxes();
  }

  const getDetoxes = () => {
  // In the future we are gonna have all the Detoxes object in a server.
  }

  useEffect(componentDidMount, []);

  return (
    <Box m={1}>
      <Box>
        Days Free:
        <Typography variant="subtitle2">
          { calculateDays(alcDate) }
        </Typography>
        <Typography variant="subtitle2">
          { calculateDays(cigDate) }
        </Typography>
        <Typography variant="subtitle2" style={styles}>
          { calculateDays(cannabisTempDate) }
        </Typography>
      </Box>
    </Box>
  );
}

export default Detox;
