import { Grid, Typography,Box } from '@mui/material';
import React from 'react';
import './Coupon.css';
function Coupons() {
  const items = [
    {
      offer: 'Extra 40% Off',
      valid: 'Valid till 30 Apr, 2024',
      details: 'Get extra 50% off upto ₹50 on 1 item(s) ( price inclusive of cashback/coupon)',
      terms: 'View T&C',
    },
   
    {
      offer: 'Extra 40% Off',
      valid: 'Valid till 30 Apr, 2024',
      details: 'Get extra 50% off upto ₹50 on 1 item(s) ( price inclusive of cashback/coupon)',
      terms: 'View T&C',
    },
    {
      offer: 'Extra 40% Off',
      valid: 'Valid till 30 Apr, 2024',
      details: 'Get extra 50% off upto ₹50 on 1 item(s) ( price inclusive of cashback/coupon)',
      terms: 'View T&C',
    },
     // Add more items as needed...
   
  ];

  return (
   <div className='main_coupon'>
 
     <div className='offers_coupon'>
      <Grid style={{ width:'1300px'}}>
        <Typography style={{color:'#0B0B0B',fontWeight:'600',fontSize:'35px',marginBottom:'3%',marginRight:'70%'}}>
          Available Coupons
        </Typography>
      </Grid>
      <Grid style={{ marginLeft: '3%' }}>
        {items.map((item, index) => (
          <div key={index} style={{width: '1200px',borderRadius:'3px',marginBottom:'15px',border:'1px solid #8B909A'}}>
            <Grid style={{ display: 'flex', flexDirection: 'row', gap: '64%' }}>
              <Typography style={{color:'#19B300',fontWeight:'500',fontSize:'20px'}}>{item.offer}</Typography>
              <Typography style={{color:'#8B909A',fontWeight:'500',fontSize:'19px'}}>{item.valid}</Typography>
            </Grid>
            <Grid style={{ display: 'flex', flexDirection: 'row', gap: '33%' }}>
              <Typography style={{color:'#0B0B0BE8',fontWeight:'400',fontSize:'17px'}}>{item.details}</Typography>
              <Typography style={{color:'#0F60FF',fontWeight:'500',fontSize:'19px'}}>{item.terms}</Typography>
            </Grid>
          </div>
        ))}
      </Grid>
      </div>
 
   </div>
  );
}

export default Coupons;
