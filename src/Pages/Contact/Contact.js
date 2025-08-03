import React from 'react';
import { TextField, Button, Typography, Box, Grid, Card, CardContent, Divider } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

function Contact() {
  return (
    <>
      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p style={{ color: "black" }}>If you have any Querires?</p>
                <h1 style={{ color: "#2e7d32" }}>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        {/* <Typography variant="h4" className="text-center mb-4" fontWeight="bold">
          CONTACT US
        </Typography>
        <Typography variant="subtitle1" className="text-center mb-4">
          If you have any querires, please feel free to get in touch with us via <br /> phone, email and the form below or even on social media!
        </Typography> */}

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 2, borderColor: '#e0e0e0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Get in Touch
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box component="form" noValidate autoComplete="off">
                  <div className="row mb-3">
                    <div className="col">
                      <TextField label="Name" fullWidth variant="outlined" />
                    </div>
                    <div className="col">
                      <TextField label="Phone Number" fullWidth variant="outlined" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <TextField label="Email" type="email" fullWidth variant="outlined" />
                  </div>
                  <div className="mb-3">
                    <TextField label="Your Message" multiline rows={4} fullWidth variant="outlined" />
                  </div>
                  <Button variant="contained" sx={{ backgroundColor: "#198754", color: "white" }}>
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>

          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ borderRadius: 2, mb: 4, borderColor: '#e0e0e0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  Contact Information
                </Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <PhoneIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Phone</Typography>
                        <Typography variant="body1">+91 9876543210</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <EmailIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Email</Typography>
                        <Typography variant="body1">info@vaanvayal.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }}>
                    <LocationIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Address</Typography>
                      <Typography variant="body1">1234, asdfghjkl</Typography>
                    </Box>
                  </Box>
                </Grid>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ borderRadius: 2, borderColor: '#e0e0e0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  Business Hours
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        Mon - Fri
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        9:00am - 8:00pm
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        Saturday
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        9:00am - 6:00pm
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        Sunday
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        9:00am - 5:00pm
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="mt-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.387618390728!2d-88.30946218455388!3d42.040230979208464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faa4e4b2b3d95%3A0xc43bd6c979f0f2c9!2s1425%20N%20McLean%20Blvd%2C%20Elgin%2C%20IL%2060123%2C%20USA!5e0!3m2!1sen!2sin!4v1657275953905!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
