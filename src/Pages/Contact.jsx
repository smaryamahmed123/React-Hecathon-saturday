import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Button, Container, CssBaseline, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
// import { TextFields, FullTextField, MultipleSelect } from './TextField';
import UnderlineLink from '../Components/Link';
// import ColorButtons from './Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import Alerts from './SweatAlert';
import { useState } from "react";
import MultipleSelect from '../Components/Selector'
import { db } from '../Config/Firebase';
import { doc, setDoc } from 'firebase/firestore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ marginTop: '50px' }} >
          <Navbar />
          <RowAndColumnSpacing></RowAndColumnSpacing>
        </Box>
      </Container>
    </>
  )
}

export default Contact






function RowAndColumnSpacing() {
  // const [user, setuser] = useState({
  //   fName:'',
  //   lName:'',
  //   email:'',
  //   number:'',
  //   address:'',
  //   message:''
  // });
  // let name, value;
  // const getUserData = (event)=>{
  //   name = event.target.name;
  //   value = event.target.value;

  //   setuser({...user, [name]: value})
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const db = firebase.firestore();
  //     await db.collection('contacts').add({
  //       name,
  //       email,
  //       message
  //     });
  //     alert('Message sent successfully!');
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactData = {
        name: name,
        email: email,
        message: message
      };

      // Add the contact data to Firestore
      await setDoc(doc(db, 'contacts', new Date().toISOString()), contactData);

      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');

      // Show success message or perform other actions
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle error, show error message, or perform other actions
    }
  };
  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ m: 10 }}>
          <Item style={{ padding: 20, backgroundColor: 'lavender' }}>
            <Typography variant="h2" gutterBottom>
              Get In Touch
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 5,
                '& > :not(style)': {
                  mr: 2, // Margin between items
                },
              }}
            >
              <WhatsAppIcon style={{ color: 'green' }} />
              <UnderlineLink href="tel:03332298285" label="0333 2298285" actionType="call" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 5,
                '& > :not(style)': {
                  mr: 2, // Margin between items
                },
              }}
            >
              <EmailIcon style={{ color: '#0330fc' }} />
              <UnderlineLink href="mailto:kamalsahmed@gmail.com" label="kamalsahmed@gmail.com" actionType="email" />
            </Box>
            {/* <Alerts /> */}
          </Item>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Item style={{ padding: 20, backgroundColor: 'lavender' }}>
            <Container>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <form onSubmit={handleFormSubmit}>
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </form>
            </Container>
          </Item>

        </Grid>

      </Grid>
    </Box>



  );
}


