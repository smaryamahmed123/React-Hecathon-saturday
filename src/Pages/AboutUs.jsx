import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Container, CssBaseline, Typography } from '@mui/material'
const AboutUs = () => {
  return (

    <>
    <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginTop: '100px'}} >
            <Navbar />
           <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vitae tortor
        vestibulum congue. Nullam scelerisque sapien vel erat eleifend, sed posuere leo
        fermentum. Maecenas rhoncus diam in orci consequat, a congue magna cursus.
      </Typography>
        </Box>
      </Container>
    </>
  )
}

export default AboutUs