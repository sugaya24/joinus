import React from 'react';
import { Route, Switch } from 'react-router';
import Auth from './Auth';
import { Home, SignUp, SignIn, Reset, CreatePost, Discover } from './templates';

export const Router = () => {
  return (
    <Switch>
      <Route exact path={'(/)?'} component={Home} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Auth>
        <Route exact path={'/discover'} component={Discover} />
        <Route exact path={'/post'} component={CreatePost} />
      </Auth>
    </Switch>
  );
};

export default Router;
