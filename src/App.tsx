import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BottomMenu } from './components/BottomMenu';
import Router from './Router';

const useStyles = makeStyles({
  root: {
    paddingBottom: '100px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BottomMenu />
      <main>
        <Router />
      </main>
    </div>
  );
};

export default App;
