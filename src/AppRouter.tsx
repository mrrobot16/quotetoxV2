import React from "react";
import { 
  Switch,
  Route,

} from "react-router-dom";
import { Container } from '@material-ui/core';

import { Home } from "containers"

function AppRouter() {
  return (
    <Container>
      <Switch>
        <Route path={['/', '/home']} component={Home} />
      </Switch>
    </Container>
  );
}

export default AppRouter;