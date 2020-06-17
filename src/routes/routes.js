import React from 'react';
import ViewBooks from '../pages/ViewBooks/index';
import AddBook from '../pages/AddBook/index';
import NotFound from '../pages/NotFound/index';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ViewBooks} />
        <Route path="/add-book" exact component={AddBook} />
        <NotFound />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;