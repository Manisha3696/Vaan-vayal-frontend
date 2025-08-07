import React from 'react';
import { TextField, Button, Typography, Box, Grid, Card, CardContent, Divider } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",

    });
  }, []);

  return (
    <>
      <div data-aos="fade-up" class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div data-aos="fade-up" class="breadcrumb-text">
                <p style={{ color: "black" }}>If you have any Queries?</p>
                <h1 style={{ color: "#2e7d32" }}>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-3 mb-4" data-aos="fade-right">
            <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', background: "#e6f3e6" }}>
              <CardContent>
                <div className="mb-3">
                  <i className="bi bi-geo-alt-fill fs-1" style={{ color: '#198754' }}></i>
                </div>
                <h5 className="fw-bold">Vaan Vayal Enterprises Private Limited</h5>
                <p className="mb-0">5/199, Mugappair East</p>
                <p className="mb-0">Chennai - 600 037.</p>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-3 mb-4" data-aos="fade-right">
            <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', background: "#e6f3e6" }}>
              <CardContent>
                <div className="mb-3">
                  <i className="bi bi-envelope-fill fs-1" style={{ color: '#198754' }}></i>
                </div>
                <h5 className="fw-bold">Mail us</h5>
                <p>info@vaanvayal.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-3 mb-4" data-aos="fade-right">
            <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', background: "#e6f3e6" }}>
              <CardContent>
                <div className="mb-3">
                  <i className="bi bi-telephone-fill fs-1" style={{ color: '#198754' }}></i>
                </div>
                <h5 className="fw-bold">Call us</h5>
                <p>+91 93427 03670</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 2, borderColor: '#e0e0e0' }}>
              <CardContent>
                <Typography data-aos="fade-up" variant="h6" gutterBottom>
                  Get in Touch
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box data-aos="fade-up" component="form" noValidate autoComplete="off">
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
                  <Button data-aos="fade-up" variant="contained" sx={{ backgroundColor: "#198754", color: "white" }}>
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: "50%" }}>
            <Card variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
              <CardContent>
                <div data-aos="fade-up" className="mt-3">
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Contact;
