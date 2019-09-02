import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  navButton: {
    background: 'linear-gradient(45deg, #FFFF00 30%, #e1ffb3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 5px 1px rgba(200, 100, 200, .3)',
    color: '#BF94E4',
    height: 40,
    padding: '0 20px',
  }
});

export default function Nav() {
  const classes = useStyles();
  return (
    <div className='nav'>
      <div className='titleNav'>
        <h1>Generic Site</h1>
      </div>
      <div className='aboutButtonNav'>
              <Button className={classes.navButton}>About</Button>
      </div>
    </div>
  )
}
