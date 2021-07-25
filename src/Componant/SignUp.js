import React from "react";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MuiPhoneNumber from "material-ui-phone-number";

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    //   backgroundColor: "#313B54",
    },
    lable: {
      fontSize: 'small',
    }
  }));

export default function SignUp() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
        const classes = useStyles()
      return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <Typography variant="body2" gutterBottom>
          Create your profile to save your score, track progress and get access to training materials, workshops, and our community of profesionals.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText="Minimum of 8 characters, 1 number,1 letter"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
            />
            <MuiPhoneNumber
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    variant="outlined"
                    // containerStyle={{width:'1220px'}}
                    // dropdownStyle={{height:'50px'}}
                    defaultCountry={"ie"}
                    // value={this.state.phone}
                    // onChange={this.handlePhoneChange}
                    className={classes.form}
                  />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              // label="By creating an account, you agree to our Privaccy Policy and Terms of Use"
              label={<Typography className={classes.lable}>By creating an account, you agree to our Privaccy Policy and Terms of Use</Typography>}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  back
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Continue without an account"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Click Here
      </Button>
          <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent>
        <Typography component="h1" variant="h6">
            Enter Your Specialization
          </Typography>
        <TextField
              variant="outlined"
              margin="normal"
              required
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
            />
        </DialogContent>
        <DialogActions>
          <Button
           autoFocus onClick={handleClose}
           type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
           >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </Container>
      );
    }
  