// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../css/paid.css';
import { Link } from 'react-router-dom';
function PaidPage() {
  return (
    <div className='artt'>
    <div className='art'>
      <h1 className='a'>Paid Membership</h1>
      <p className='d'>Upgrade to our paid membership to unlock exclusive benefits and enhance your experience on our matrimonial website.</p>
      <h2 className='b'>Membership Benefits</h2>
      <ul className='e'>
        <li>Access to advanced search filters for better match customization.</li>
        <li>Prioritized visibility in search results and recommendations.</li>
        <li>Send and receive unlimited messages to connect with potential matches.</li>
        <li>View contact details of interested profiles.</li>
        <li>Get personalized recommendations based on your preferences.</li>
      </ul>
      <h2 className='b'>Pricing Plans</h2>

    <Grid container spacing={20}>
      <Grid item xs={6}>
      <Card sx={{ height: '100%' }} elevation={20}>
      
          <CardContent>
            <Typography variant="h6" component="div">
      <div>
        <h3 className='c'>Basic Plan</h3>
        <p className='d'>Price: $9.99/month</p>
        <ul className='e'>
          <li>Access to basic features</li>
        </ul>
        <button>Pay Now</button>
      </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </CardContent>
        </Card>
       
      </Grid>
      <Grid item xs={6}>
      <Card sx={{ height: '100%' }} elevation={20}>
        
          <CardContent>
            <Typography variant="h6" component="div">

      <div>
        <h3 className='c'>Premium Plan</h3>
        <p className='d'>Price: $19.99/month</p>
        <ul className='e'>
          <li>Access to all features</li>
          <li>Higher visibility and priority</li>
          <li>24/7 customer support</li>
        </ul>
        <Link to="/pay"><button>Pay Now</button></Link>
      </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
            </Typography>
          </CardContent>
        </Card>
      
      </Grid>
    </Grid>

      <h2 className='b'>Payment Options</h2>
      <p className='d'>We offer secure payment options for your convenience:</p>
      <ul className='e'>
        <li>Credit Card</li>
        <li>Debit Card</li>
        <li>PayPal</li>
      </ul>
    </div>
    </div>

  );
}

export default PaidPage;
