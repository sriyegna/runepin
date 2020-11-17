import React from "react";
import { Paper, Box, useMediaQuery } from "@material-ui/core";

const PageBase = (props) => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box mx={smallScreen ? 5 : 15} my={5}>
      <Paper elevation={3}>{props.children}</Paper>
    </Box>
  );
};

export default PageBase;
