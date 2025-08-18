import React, { useState } from 'react';
import '../../Css/Style.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Modal, Box, Typography, TextField, Grid, IconButton, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import banner from '../../images/Global buyers/banner-2.jpg'
import country1 from '../../images/Global buyers/country-1.jpg';
import country2 from '../../images/Global buyers/country-2.jpg';
import country3 from '../../images/Global buyers/country-3.jpg'
import country4 from '../../images/Global buyers/country-4.jpg';
import country5 from '../../images/Global buyers/country-5.jpg';
import country6 from '../../images/Global buyers/country-6.jpg';
import country7 from '../../images/Global buyers/country-7.jpg';
import country8 from '../../images/Global buyers/country-8.jpg';
import CloseIcon from '@mui/icons-material/Close';
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSend } from "react-icons/io5";
import { useEffect } from "react";
import CircularDottedLoader from '../CircularDotterLoader/CircularDottedLoader';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxWidth: '900px',
  width: '90%',
  maxHeight: '90vh',
  overflowY: 'auto'
};

const Globalbuyers = () => {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    comments: ''
  });

  const handleOpen = (image, countryName) => {
    setOpen(true)
    setImage(image)
    setSelectedCountry(countryName);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const dataToSend = {
        ...formData,
        country: selectedCountry
      };

      const res = await fetch("https://vaan-vayal-server.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();
      console.log("Data", data);
      Swal.fire({
        icon: "success",
        title: "Your enquiry has been sent successfully! Our team will contact you shortly.",
        confirmButtonColor: "#198754",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: '',
        comments: ''
      });
      setSelectedCountry("");
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Unable to send your enquiry. Please try again later.",
        confirmButtonColor: "#dc3545",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",

    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up"
        className="position-relative text-white text-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '330px',
          overflow: 'hidden',
        }}
      >

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        ></div>

        <Container className="position-relative z-1 h-100 d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col data-aos="fade-up" className="px-3 px-md-3 py-5" >
              <h1 className="fw-bold display-6 display-md-5" style={{ color: 'white', fontSize: '32px' }}>
                Partner with Vaan Vayal <br />
                Your Trusted Indian Agro Products Exporter
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <section data-aos="fade-up" className="py-5 bg-light">
        <Container>
          <h2
            className="text-center mb-4 fw-bold"
            style={{
              fontSize: '20px',
            }}
          >
            Our Journey with International Buyers
          </h2>
          <Row data-aos="fade-up" className="g-4 justify-content-center">
            {[
              { name: 'Australia', image: country1 },
              { name: 'Malaysia', image: country2 },
              { name: 'Singapore', image: country3 },
              { name: 'UK', image: country4 },
              { name: 'USA', image: country5 },
              { name: 'Denmark', image: country6 },
              { name: 'Chile', image: country7 },
              { name: 'Taiwan', image: country8 },
            ].map((cat, i) => (
              <Col data-aos="fade-up" key={i} md={3} sm={6} xs={12}>
                <Link className="text-decoration-none text-dark">
                  <Card className="text-center h-100 shadow-sm border-0 category-card">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <div className="category-icon mb-3">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="img-fluid"
                          style={{ width: '230px', height: '180px', objectFit: 'contain' }}
                        />
                      </div>
                      <Card.Title className="fw-bold">{cat.name}</Card.Title>
                      <Button className='btn btn-0 btn-success w-100' style={{ borderRadius: 0 }} onClick={() => handleOpen(cat.image, cat.name)}> <IoSend style={{ marginRight: "8px", marginTop: "-2px", alignItems: 'center' }} /> Enquire for Import</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                <CircularDottedLoader />
              </div>
            ) : (
              <Grid container spacing={4}>
                <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    VAAN VAYAL BRAND
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={image}
                      alt="Vaan Vayal"
                      style={{ maxWidth: '275px', height: 'auto', marginTop: '50px' }}
                    />
                  </div>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: theme.palette.grey[500],
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField label="Name" variant="outlined" fullWidth value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} margin="normal" />
                  <TextField label="Email" variant="outlined" fullWidth value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} margin="normal" />
                  <TextField label="Phone Number" variant="outlined" fullWidth value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} margin="normal" />

                  <TextField
                    label="I like to Enquire for"
                    variant="outlined"
                    select
                    fullWidth
                    margin="normal"
                    value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <MenuItem value="Importer">Importer</MenuItem>
                    <MenuItem value="Wholesaler">Wholesaler</MenuItem>
                    <MenuItem value="Distributor">Distributor</MenuItem>
                    <MenuItem value="Retailer">Retailer</MenuItem>
                  </TextField>

                  <TextField
                    label="Comments"
                    variant="outlined"
                    fullWidth
                    multiline
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    rows={3}
                    margin="normal"
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    className='btn btn-0 btn-success w-50 mt-2'
                    style={{ borderRadius: 0 }}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            )}
          </Box>
        </Modal>
      </section>
    </div>
  );
}

export default Globalbuyers;