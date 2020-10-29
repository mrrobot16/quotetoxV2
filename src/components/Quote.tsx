import React, { useState, useEffect } from "react";
import { 
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { defaultQuote, quotes, fetchQuotes } from "services/quotes";

function Quote() {
  const [quote] = useState(defaultQuote);
  const [randomQuote, setRandomQuote] = useState("");
  const componentDidMount = () => {
    // getQuotes();
  }

  const getQuotes = () => {
    // setQuote(defaultQuote);
    fetchQuotes();
    const totalQuotes = quotes.length;
    const randomQuote = quotes[Math.floor(Math.random() * totalQuotes)]
    setRandomQuote(randomQuote);
  }

  useEffect(componentDidMount, []);

  return (
    <Box m={1}>
      <Box>
        Quote of The Day: 
        <Typography variant="subtitle2">
          { randomQuote ? randomQuote : quote }
        </Typography>
      </Box>
      <Button variant="contained" onClick={getQuotes}>Random Quote</Button>
    </Box>
  );
}

export default Quote;
