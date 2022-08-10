import React, {useRef} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { firestore } from '../firebase';
import { getDocs, addDoc, collection, query, where } from '@firebase/firestore';
import {Container} from '@mui/material';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Paetin Nelson
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

export default function SignUpPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const usersRef = collection(firestore, "Users");



  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;

    const data = new FormData(event.currentTarget);

    let userData = {
        username: data.get('email'),
        password: data.get('password')
    }

    const q = query(usersRef, where("username", "==", data.get('email')));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(() => {
        valid = false;
    });

    if(valid){
        try{
            addDoc(usersRef, userData);
            alert("New User added");
        }
        catch (e){
            console.log(e);
        }
        
    }
    else{
        alert("An account with this email already exists");
    }

  };
  return (
    <ThemeProvider theme={theme}>
        <Container container component="main" sx={{ height: '100vh', width: '100vw'}} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}  square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign Up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    ref={emailRef}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    ref={passwordRef}
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
            </Grid>
        </Container>
    </ThemeProvider>
    );
}
