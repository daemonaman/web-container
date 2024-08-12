import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonBase from '@mui/material/ButtonBase';
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import rectangleImage from '../../Assets/Rectangle 928.png';
import rectangle from '../../Assets/Rectangle 931.png'
import './Orders.css'
const Orders = () => {
  const [orderStatusChecked, setOrderStatusChecked] = React.useState([true, false, false, false]);
  const [orderTimeChecked, setOrderTimeChecked] = React.useState([false, false, false]);

  const handleOrderStatusChange = (index) => {
    const newOrderStatusChecked = [false, false, false, false];
    newOrderStatusChecked[index] = true;
    setOrderStatusChecked(newOrderStatusChecked);
  };

  const handleOrderTimeChange = (index) => {
    const newOrderTimeChecked = [false, false, false];
    newOrderTimeChecked[index] = true;
    setOrderTimeChecked(newOrderTimeChecked);
  };

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <div className='orders'>
       <Grid container spacing={2} style={{ padding: '20px' }}>
      {/* Filters Section */}
      <Grid item xs={12} md={3}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '10px', width: '70%', height: '80vh' }}>
          <Typography variant="h5" gutterBottom style={{ fontSize: 30 }}>
            Filters
          </Typography>
          <Typography variant="h6" gutterBottom>
            Order Status
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, mt: -3 }}>
            <FormControlLabel sx={{ pt: 3 }}
              label="On the way"
              control={<Checkbox checked={orderStatusChecked[0]} onChange={() => handleOrderStatusChange(0)} />}
            />
            <FormControlLabel
              label="Delivered"
              control={<Checkbox checked={orderStatusChecked[1]} onChange={() => handleOrderStatusChange(1)} />}
            />
            <FormControlLabel
              label="Cancelled"
              control={<Checkbox checked={orderStatusChecked[2]} onChange={() => handleOrderStatusChange(2)} />}
            />
            <FormControlLabel
              label="Returned"
              control={<Checkbox checked={orderStatusChecked[3]} onChange={() => handleOrderStatusChange(3)} />}
            />
          </Box>
          <Typography variant="h6" gutterBottom>
            Order Time
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, mt: -3 }}>
            <FormControlLabel sx={{ pt: 3 }}
              label="Last Week"
              control={<Checkbox checked={orderTimeChecked[0]} onChange={() => handleOrderTimeChange(0)} />}
            />
            <FormControlLabel
              label="Last 30 days"
              control={<Checkbox checked={orderTimeChecked[1]} onChange={() => handleOrderTimeChange(1)} />}
            />
            <FormControlLabel
              label="Older"
              control={<Checkbox checked={orderTimeChecked[2]} onChange={() => handleOrderTimeChange(2)} />}
            />
          </Box>
        </Paper>
      </Grid>

      {/* Orders Section */}
      <Grid item xs={12} md={9} sx={{marginLeft:'-2%'}}>
        <Typography variant="h6" color="inherit" component="div" style={{ paddingBottom: '20px' }}>
          Orders
        </Typography>
        <div className='stats'>
          {[rectangleImage, rectangle].map((image, index) => (
            <Paper
              key={index}
              sx={{
                p: 4,
                margin: 'auto',
                marginBottom: 2,
                maxWidth: 1000,
                flexGrow: 1,
                border: '1px solid rgba(11, 11, 11, 0.30)',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                marginTop:'3%' 
              }}
            >
              <Grid container spacing={4} sx={{ alignItems: 'center'}}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <img alt="complex" src={image} style={{ width: '100%', height: '100%' }} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: '25px',
                    color: '#0B0B0B',
                    fontWeight: '400',
                  }}>LuvLap Silicone FoodFruit Nibbler</Typography>
                  <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{
                      fontSize: '18px',
                      color: 'rgba(11, 11, 11, 0.60)',
                      fontWeight: '700',
                    }}>Colour: Violet & Pink</Typography>
                    <Typography sx={{
                      fontSize: '20px',
                      color: 'rgba(11, 11, 11, 0.60)',
                      fontWeight: '400',
                      marginRight: '50px'
                    }}>Need Help?</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs sx={{ textAlign: 'center', alignItems: 'center' }}>
                      <Typography sx={{
                        fontSize: '20px',
                        color: '#0B0B0B',
                        marginTop: '30px',
                        fontWeight: '500',
                        textAlign: 'center',
                        marginRight: '20px'
                      }}>
                        ₹ 154
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ marginTop: '10px' }}>
                    <Typography variant="subtitle1" component="div" style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                      <FaRegCircle style={{ color: 'green' }} />
                      Delivery expected by Jan 23
                    </Typography>
                    <Typography>Your Order has been Placed.</Typography>
                    <Button
                      variant="contained"
                      sx={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        marginLeft: '30px',
                        background: '#FF70A6',
                        borderRadius: '40px',
                      }}
                    >
                      Return
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </Grid>
    </Grid>
    </div>
  );
};

export default Orders;
