import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function UserCreate() {
  const handleSubmit = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "username": username,
      "email": email,
      "avatar": avatar
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/create", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result["message"])
        if (result["status"] === "ok") {
          window.location.href = "/"
        }
      })
      .catch(error => console.log('error', error));
  }
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState("")

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>

        <Typography variant="h6" gutterBottom component="div">
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth required
                onChange={(e) => setFname(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth required
                onChange={(e) => setLname(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth required
                onChange={(e) => setUsername(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required
                onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Avatar" variant="outlined" fullWidth required
                onChange={(e) => setAvatar(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>Create</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
