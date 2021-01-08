import React from "react";
import { Box } from "@material-ui/core";

import { Detox, Quote, Dotox } from "components";

function Home() {
  return (
    <Box m={1}>
      <Detox />
      <Dotox />
      <Quote />
    </Box>
  );
}

export default Home;
