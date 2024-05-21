// src/PhysicianForm.js
import React from 'react';
import { Container, TextField, Typography, Grid, Button, Checkbox, FormControlLabel } from '@mui/material';

const PhysicianForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    dob: '',
    height: '',
    weight: '',
    pulse: '',
    vision: '',
    medicalFindings: '',
    clearance: '',
    recommendations: '',
    physicianName: '',
    date: '',
    address: '',
    phone: '',
    signature: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Preparticipation Physical Evaluation</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Pulse"
              name="pulse"
              value={formData.pulse}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Vision"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          {/* Additional medical fields */}
          <Grid item xs={12}>
            <TextField
              label="Medical Findings"
              name="medicalFindings"
              value={formData.medicalFindings}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.clearance === 'Cleared'}
                  onChange={() => setFormData({ ...formData, clearance: 'Cleared' })}
                  name="clearance"
                />
              }
              label="Cleared for all sports without restriction"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.clearance === 'Not Cleared'}
                  onChange={() => setFormData({ ...formData, clearance: 'Not Cleared' })}
                  name="clearance"
                />
              }
              label="Not cleared for any sports"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Recommendations"
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Physician Name"
              name="physicianName"
              value={formData.physicianName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Signature"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PhysicianForm;
