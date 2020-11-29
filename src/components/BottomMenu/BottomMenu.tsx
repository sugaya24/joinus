import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import { Home, Search, Create, Contacts } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const useStyes = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    background: '#96A7AF',
    height: '80px',
    width: '100%',
    zIndex: 10,
    borderRadius: '20px 20px 0 0',
    boxShadow: '0px -1px 10px 3px rgba(0, 0, 0, .2);',
  },
  menu: {
    width: '320px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const BottomMenu = () => {
  const classes = useStyes();
  const dispatch = useDispatch();

  return (
    <section className={classes.root}>
      <div className={classes.menu}>
        <IconButton onClick={() => dispatch(push('/profile'))}>
          <Home />
        </IconButton>
        <IconButton onClick={() => dispatch(push('/discover'))}>
          <Search />
        </IconButton>
        <IconButton onClick={() => dispatch(push('/createpost'))}>
          <Create />
        </IconButton>
        <IconButton onClick={() => dispatch(push('/'))}>
          <Contacts />
        </IconButton>
      </div>
    </section>
  );
};

export default BottomMenu;
