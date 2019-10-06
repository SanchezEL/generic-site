import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

let useStyles = makeStyles({
  navButton: {
    background: 'linear-gradient(45deg, #FFFF00 30%, #e1ffb3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 5px 1px rgba(200, 100, 200, .3)',
    color: '#BF94E4',
    height: 40,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between'

  },
  theNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#BF94E4',
    color: '#ffffff'
  },
  textareaOfNav: {
    background: '#BF94E4'
  }
});

export default function Nav(props) {
  console.log('whats up with nav props?',props)
  useStyles = makeStyles({
    navButton: {
      background: `linear-gradient(to left bottom , #82ffa1, ${props.styles.buttonColor})`,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 1px 5px 1px rgba(200, 100, 200, .3)',
      color: `${props.styles.colorPrimary}`,
      height: 40,
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    theNav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: `${props.styles.colorPrimary}`,
      color: '#ffffff'
    },
    textareaOfNav:{
      background: `${props.styles.colorPrimary}}`
    }
  })
  console.log(useStyles)
  const [values, setValues] = React.useState({
    backgroundColor: props.backgroundColor
  });
  console.log('nav component props', props)
  const classes = useStyles();
  return (
    <div className={classes.theNav}>
      <div className ='spacerNav'></div>
      <div className='titleNav'>
        <textarea className={classes.textareaOfNav}>Generic Site</textarea>
      </div>
      <div className='aboutButtonNav'>
        <Button className={classes.navButton}>About</Button>
      </div>
    </div>
  )
}
