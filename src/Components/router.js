import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import MainPage from "Routes/MainPage";
import Online from "Routes/Online";
import Photo from "Routes/Photo";
import Review from "Routes/EduReview";
import EduDetail from "Routes/EduDetail";
import EduForm from "Routes/EduForm";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/online" exact component={Online} />
      <Route path="/photo" exact component={Photo} />
      <Route path="/review" exact component={Review} />
      <Route path="/eduForm" exact component={EduForm} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default Router;
