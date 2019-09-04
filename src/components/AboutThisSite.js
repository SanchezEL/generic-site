import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


export default function AboutThisSite() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <div className="aboutTheSiteTitle">
        <textarea>A Little About Our Site</textarea>
      </div>
      {/* <TextField
        id="standard-helperText"
        // label="Helper text"
        defaultValue="A Little About Our Site"
        className={classes.textField}
        // helperText="Some important text"
        margin="normal"
      /> */}
    </div>
  )
}

