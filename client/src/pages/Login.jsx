import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/styledComponent';
import { usernameValidator } from '../utils/validator';
import { useFileHandler } from '6pp';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
 
  const avatar = useFileHandler("single"); 
  const usernameValidation = usernameValidator(username);
  const handleLogin = (e)=>{
    e.preventDefault();
  }
  const handleSignup=(e)=>{
    e.preventDefault();
  }
  return (
    <div 
      style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.5), rgba(200,200,200,0.8))"}}
    >
    <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper
        elevation={3}
        sx={
          {
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

        {isLogin ? (
          <>
            <Typography variant='h5'>Login</Typography>
            <form 
            style={{
              width: "100%",
              marginTop: "1rem",
            }} 
            onSubmit={handleLogin}
              
              >
              <TextField
                required
                fullWidth
                label="username"
                margin='normal'
                variant='outlined'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                required
                fullWidth
                label="password"
                margin='normal'
                variant='outlined'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant='contained'
                color='primary'
                sx={{ marginTop: "1rem" }}
                type='submit'
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

              <Button
                variant='text'
                onClick={toggleLogin}
                fullWidth
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : <>
          <Typography variant='h5'>Register</Typography>
          <form 
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
            onSubmit={handleSignup}
            >
            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
              <Avatar sx={{
                width: "10rem",
                height: "10rem",
                objectFit: "contain"
              }}
              src={avatar.preview}
              />
              
              <IconButton sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)"
                }
              }}
                component="label"
              >


                <>
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </>
              </IconButton>

            </Stack>
            {avatar.error && (
                <Typography variant='caption' color='error' m={"1rem"} width={"fit-content"} display={"block"}>
                  {avatar.error}
                </Typography>
              )}

            <TextField
              required
              fullWidth
              label="name"
              margin='normal'
              variant='outlined'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              required
              fullWidth
              label="username"
              margin='normal'
              variant='outlined'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => setUsernameTouched(true)}
            />


            {usernameTouched && !usernameValidation.isValid && (
              <Typography color="error" variant="caption">
                {usernameValidation.errormessage}
              </Typography>
            )}

            <TextField
              required
              fullWidth
              label="password"
              margin='normal'
              variant='outlined'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />

           
            <TextField
              required
              fullWidth
              label="bio"
              margin='normal'
              variant='outlined'
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: "1rem" }}
              type='submit'
              fullWidth
            >
              Sign Up
            </Button>
            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

            <Button
              variant='text'
              onClick={toggleLogin}
              fullWidth
            >
              Login instead
            </Button>
          </form>
        </>}
      </Paper>

    </Container>
    </div>
  )
}

export default Login;