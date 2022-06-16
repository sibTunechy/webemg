import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
// import { GoogleLogin } from '@react-oauth/google';
import useStyles from './styles';
import Input from './Input';

const initialState =  { firstName: '', lastName: '', password: '', confirmPassword: ''  }

const Auth = () => {
    let navigate = useNavigate()
    if(localStorage){
    navigate('/')
    }
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    // const isSignup = true;
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleShowPassword = () => setShowPassword ((prevShowPassword) => !prevShowPassword);//toggles the password on and off

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup) // toggles show sign up on and off
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        console.log(res)
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try Again Later');
    };

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                            </>
                        ) }
                        <Input  name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> } 
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    { isSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <GoogleLogin
                    clientId='131223449683-snbif7emtc6r5fnrvjm17gqu23920k0t.apps.googleusercontent.com' // second OAuth ID used here
                    render={(renderProps) => (
                        <Button 
                        className={classes.googleButton}
                        color='primary' 
                        fullWidth 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={<Icon/>} 
                        variant='contained'
                        >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'    
                />
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : ' Dont have an account? Sign Up ' }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth;