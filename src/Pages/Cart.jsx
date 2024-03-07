import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'
import { Box, Container, CssBaseline, IconButton, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link, } from 'react-router-dom';
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { removeAddToCart } from '../store/slices/CartSlice';


const AddToCart = () => {
const  dispatch = useDispatch()
const { addToCart } = useSelector((state) => state.addToCartReducer);
console.log("addToCart Cart ", addToCart);

  return (
    <>
    <Navbar />
     <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: '100px'}} >
        <Box >
              {addToCart? (addToCart.map((cart)=>(
                 <Grid style={{ display: 'flex', flexWrap: 'wrap' }}>
                 
                    <Card  key={cart.id}  style={{display: 'flex', width: '100%',   marginTop: 20, justifyContent: 'space-evenly'}}>
                      <Link style={{textDecoration: 'none'}} to={`/DetailedPg/${cart.id}` }>
                        <CardMedia
                          component="img"
                          height="100"
                          image={cart.thumbnail}
                          alt="Product Image"
                          style={{ width: '100px' }}
                          // removeCart={true}
                         />
                        <CardContent>
                          <Typography variant="body1" component="div" >
                             {cart.description}
                          </Typography>
                        </CardContent>
                        </Link>
                        {/* <IconButton size="large"  aria-label="delete" onClick={() => minusCount(cart.id)}>
                         <RemoveShoppingCartTwoToneIcon  style={{ color: 'black', fontSize: '90' }}/>
                        </IconButton> */}
                         <IconButton size="large"  aria-label="delete" onClick={() => {dispatch(removeAddToCart(cart));}}>
                         <RemoveShoppingCartTwoToneIcon  style={{ color: 'black', fontSize: '90' }}/>
                        </IconButton>
                       </Card>
                  </Grid>
            ))):('Your Cart Is Empty')}
        </Box>
      </Container>
    </>
  );
};

export default AddToCart;
