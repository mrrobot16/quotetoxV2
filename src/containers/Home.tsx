import React from "react";
import { Box } from "@material-ui/core";

import { Detox, Quote } from "components";

function Home() {
  return (
    <Box m={1}>
      <Detox />
      <Quote />
    </Box>
  );
}

export default Home;
