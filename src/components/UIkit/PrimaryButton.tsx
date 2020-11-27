import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type PrimaryButtonParameter = {
  label: string;
  onClick: any;
};

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#25C685',
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    width: 256,
    '&:hover': {
      background: '#286053',
    },
  },
}));

const PrimaryButton = (props: PrimaryButtonParameter) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
