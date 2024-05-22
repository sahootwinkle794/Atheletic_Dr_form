import React from 'react';
import { Container, TextField, Typography, Grid, Button, Checkbox, FormControlLabel, Stepper, Step, StepLabel } from '@mui/material';

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

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Basic Information', 'Medical Findings', 'Clearance and Recommendations'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Pulse"
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
          </>
        );
      case 1:
        return (
          <Grid item xs={12}>
            <TextField
              label="Medical Findings"
              name="medicalFindings"
              value={formData.medicalFindings}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              InputProps={{ style: { backgroundColor: 'white' } }}
            />
          </Grid>
        );
      case 2:
        return (
          <>
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
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Physician Name"
                name="physicianName"
                value={formData.physicianName}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Signature"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </Grid>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="heading">
        Preparticipation Physical Evaluation
      </Typography>
      <Typography variant="h6" gutterBottom className="heading">
        PHYSICAL EXAMINATION FORM
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {getStepContent(activeStep)}
        </Grid>
        <div style={{ marginTop: '20px' }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} style={{ marginRight: '10px' }}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
};

export default PhysicianForm;
