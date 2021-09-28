import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function AddMovie() {
  const classes = useStyles();
  return (
    <div className={classes.AddMovie}>
      <div className={classes.singleRow}>
        <TextField fullWidth id="outlined-basic" label="Movie name" variant="outlined" />
      </div>

      <div className={classes.singleRow}>
        <TextField
          id="outlined-multiline-static"
          label="Movie Description"
          multiline
          fullWidth
          rows={4}
        //defaultValue="Type here..."
        />
      </div>

      <div className={classes.singleRow}>
        <div>Movie Tags</div>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Romantic" color="success" />
          <FormControlLabel control={<Checkbox />} label="Action" color="success" />
          <FormControlLabel control={<Checkbox />} label="Horror" color="success" />
          <FormControlLabel control={<Checkbox />} label="Comedy" color="success" />
        </FormGroup>
      </div>
      <div className={classes.singleRow}>
        <TextField fullWidth id="outlined-basic" label="Duration" variant="outlined" />
      </div>
      <Button className={classes.root} variant="contained">Submit</Button>
    </div>
  );
}



export default AddMovie;


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  AddMovie: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    maxWidth: 600
  },
  singleRow: {
    marginBottom: 25
  }

});