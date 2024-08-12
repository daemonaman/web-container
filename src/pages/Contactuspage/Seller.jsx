import React from 'react'
import New from './New'
import { Grid, Typography, Link } from '@mui/material';
import image1 from '../../Assets/Image 1.png'

const Seller = () => {
  return (
    <div style={{display:'flex',backgroundColor:'#f9f9f9',alignItems:'center'}}>
        <New/>
       
      
        <div>
        <Typography variant="h4" gutterBottom sx={{backgroundColor:'#f9f9f9',fontWeight:'700',marginBottom:'30px'}}>
        Frequently Asked Questions
      </Typography>
        <Grid container spacing={2} style={{ padding: 20,backgroundColor:'#fff',width:'95%' }}>
      <Grid item xs={12}>
        <Typography variant="h6" align="left" fontSize={'20px'} fontWeight={'400'}>
          kidtryz.com is a marketplace on which third-party sellers sell products to customers. To contact a seller, please send a letter with the below address on the envelope and include product page URL so it can be forwarded to the seller.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="left" fontSize={'20px'} fontWeight={'400'}>
          I want to contact the seller about a grievance
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography align="left" fontSize={'20px'} fontWeight={'400'} color={'#000'}><a href="mailto:support@kidtryz.com" align="left" style={{color:'black'}}>
          Click here for address
        </a></Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="left" fontSize={'20px'} fontWeight={'400'}>
          To,<br />
          “Include Seller's name”<br />
          Seller Mailbox: Contact Seller<br />
          c/o Flipkart Internet Private Limited,<br />
          Buildings Alyssa, Begonia & Clove,<br />
          Embassy Tech Village, Bengaluru 560103<br />
          Contact: 044-66904690
        </Typography>
      </Grid>
    </Grid> 
    
        </div>

    </div>
  )
}

export default Seller