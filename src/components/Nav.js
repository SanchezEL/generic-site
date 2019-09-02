import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  navButton: {
    background: 'linear-gradient(45deg, #BF94E4 30%, #967bb6 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 5px 1px rgba(200, 100, 200, .3)',
    color: 'white',
    height: 40,
    padding: '0 20px',
  }
});

export default function Nav() {
  const classes = useStyles();
  return (
    <div>
      <h1>Generic Site</h1>
      <Button className={classes.navButton}>About</Button>
    </div>
  )
}
