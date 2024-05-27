import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox

} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import "./App.css";
import logo from "../src/assets/logo.png";
import Swal from "sweetalert2";

const PhysicianForm = () => {

  const [clearedForParticipation, setClearedForParticipation] = useState(false);
  const [physicianName, setPhysicianName] = useState("");
  const handleClearedForParticipationChange = (event) => {
    setClearedForParticipation(event.target.checked);
  };
  const handlePhysicianNameChange = (event) => {
    setPhysicianName(event.target.value);
  };
  const [pendingEvaluationChecked, setPendingEvaluationChecked] = useState(false);
  const [forAnySportsChecked, setForAnySportsChecked] = useState(false);
  const [forCertainSportsChecked, setForCertainSportsChecked] = useState(false);

  const handlePendingEvaluationChecked = (event) => {
    setPendingEvaluationChecked(event.target.checked);
  };

  const handleForAnySportsChecked = (event) => {
    setForAnySportsChecked(event.target.checked);
  };

  const handleForCertainSportsChecked = (event) => {
    setForCertainSportsChecked(event.target.checked);
  };

  const [normalStatusList, setNormalStatusList] = useState([]);
  const [abnormalStatusList, setAbnormalStatusList] = useState([]);

  const handleNormalStatusChange = (event, index) => {
    const updatedNormalStatusList = [...normalStatusList];
    updatedNormalStatusList[index] = event.target.value;
    setNormalStatusList(updatedNormalStatusList);
  };

  const handleAbnormalStatusChange = (event, index) => {
    const updatedAbnormalStatusList = [...abnormalStatusList];
    updatedAbnormalStatusList[index] = event.target.value;
    setAbnormalStatusList(updatedAbnormalStatusList);
  };

  const [formData, setFormData] = React.useState({
    name: "",
    dob: "",
    height: "",
    weight: "",
    pulse: "",
    vision: "",
    medicalFindings: "",
    clearance: "",
    recommendations: "",
    physicianName: "",
    date: "",
    address: "",
    phone: "",
    signature: "",
    stress: "",
    sadness: "",
    safety: "",
    tobaccoUse: "",
    recentTobaccoUse: "",
    alcoholDrugs: "",
    steroids: "",
    supplements: "",
    safetyMeasures: "",
    gender: "",
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    "Basic Information",
    "Sensitive Issues",
    "Examination",
    "Medical Status",
    "Musculoskeletal",
    "Clearance & Recommendations",
    "Physician Details"

  ];

  const [rows, setRows] = React.useState([
    { medical: ["Appearance", "Marfan stigmata (kyphoscoliosis, high-arched palate, pectus excavatum, arachnodactyly, arm span > height, hyperlaxity, myopia, MVP, aortic insufficiency)"] },
    { medical: ["Eyes/ears/nose/throat", "Pupils equal", "Hearing"] },
    { medical: ["Lymph nodes"] },
    { medical: ["Hearta", "Murmurs (auscultation standing, supine, +/- Valsalva)", "•	Location of point of maximal impulse (PMI)"] },
    { medical: ["Pulses", "Simultaneous femoral and radial pulses"] },
    { medical: ["Lungs"] },
    { medical: ["Abdomen"] },
    { medical: ["Genitourinary (males only)b"] },
    { medical: ["Skin", "HSV, lesions suggestive of MRSA, tinea corporis"] },
    { medical: ["Neurologic c"] },
    { musculoskeletal: ["Neck"] },
    { musculoskeletal: ["Back"] },
    { musculoskeletal: ["Shoulder/arm"] },
    { musculoskeletal: ["Elbow/forearm"] },
    { musculoskeletal: ["Wrist/hand/fingers"] },
    { musculoskeletal: ["Hip/thigh"] },
    { musculoskeletal: ["Knee"] },
    { musculoskeletal: ["Leg/ankle"] },
    { musculoskeletal: ["Foot/toes"] },
    { musculoskeletal: ["Functional", "• Duck-walk, single leg hop"] },
    // Add more rows as needed
  ]);

  const initialStatusList = Array(rows.length).fill("");
  const medicalRows = rows.filter(row => row.medical);
  const musculoskeletalRows = rows.filter(row => row.musculoskeletal);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
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

    setIsSubmitted(true); // Set form submission state to true
    // if(isSubmitted)
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Success!',
    //   text: 'Form submitted successfully!',
    // });
    console.log(isSubmitted);
  };

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const submitFun = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Form submitted successfully!",
    });
  };
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? null : index);
  };



  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Grid item xs={8}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

          </>
        );
      case 1:
        return (
          <>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Do you feel stressed out or under a lot of pressure?
                </InputLabel>
                <Select
                  value={formData.stress}
                  onChange={handleChange}
                  name="stress"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Do you ever feel sad, hopeless, depressed, or anxious?
                </InputLabel>
                <Select
                  value={formData.sadness}
                  onChange={handleChange}
                  name="sadness"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Do you feel safe at your home or residence?
                </InputLabel>
                <Select
                  value={formData.safety}
                  onChange={handleChange}
                  name="safety"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Have you ever tried cigarettes, chewing tobacco, snuff, or
                  dip?
                </InputLabel>
                <Select
                  value={formData.tobaccoUse}
                  onChange={handleChange}
                  name="tobaccoUse"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  During the past 30 days, did you use chewing tobacco, snuff,
                  or dip?
                </InputLabel>
                <Select
                  value={formData.recentTobaccoUse}
                  onChange={handleChange}
                  name="recentTobaccoUse"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Do you drink alcohol or use any other drugs?
                </InputLabel>
                <Select
                  value={formData.alcoholDrugs}
                  onChange={handleChange}
                  name="alcoholDrugs"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Have you ever taken anabolic steroids or used any other
                  performance supplement?
                </InputLabel>
                <Select
                  value={formData.steroids}
                  onChange={handleChange}
                  name="steroids"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Have you ever taken any supplements to help you gain or lose
                  weight or improve your performance?
                </InputLabel>
                <Select
                  value={formData.supplements}
                  onChange={handleChange}
                  name="supplements"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">
                  Do you wear a seat belt, use a helmet, and use condoms?
                </InputLabel>
                <Select
                  value={formData.safetyMeasures}
                  onChange={handleChange}
                  name="safetyMeasures"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1" gutterBottom>
                  Gender
                </Typography>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Bp"
                name="Bp"
                value={formData.bp}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Pulse"
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Vision R 20/"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="L 20 /"
                name="l"
                value={formData.l}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
              />
            </Grid>

          </>
        );
      case 3:
        return (
          <Container style={{ marginTop: "30px" }}>
            <TableContainer component={Paper} className="meditable">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Medical</b></TableCell>
                    <TableCell><b>Normal</b></TableCell>
                    <TableCell><b>Abnormal Findings</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {medicalRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {Array.isArray(row.medical) ? (
                          <ul>
                            {row.medical.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          row.medical
                        )}
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={normalStatusList[index]}
                          onChange={(e) => handleNormalStatusChange(e, index)}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={abnormalStatusList[index]}
                          onChange={(e) => handleAbnormalStatusChange(e, index)}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        );
      case 4:
        return (
          <Container style={{ marginTop: "30px" }}>
            <TableContainer component={Paper} className="meditable">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Musculoskeletal</b></TableCell>
                    <TableCell><b>Normal</b></TableCell>
                    <TableCell><b>Abnormal Findings</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {musculoskeletalRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {Array.isArray(row.musculoskeletal) ? (
                          <ul>
                            {row.musculoskeletal.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          row.musculoskeletal
                        )}
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={normalStatusList[index]}
                          onChange={(e) => handleNormalStatusChange(e, index)}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={abnormalStatusList[index]}
                          onChange={(e) => handleAbnormalStatusChange(e, index)}
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          </Container>
        );
      case 5:
        return (
          <>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel className="inputlabel">Clearance</InputLabel>
                <Select
                  value={formData.clearance}
                  onChange={handleChange}
                  name="clearance"
                  style={{ backgroundColor: "white" }}
                >
                  <MenuItem value={"Cleared"}>
                    Cleared for all sports without restriction
                  </MenuItem>
                  <MenuItem value={"ClearedWithRecommendations"}>
                    Cleared for all sports without restriction with recommendations for further evaluation or treatment for
                  </MenuItem>
                  <MenuItem value={"NotCleared"}>
                    Not cleared
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {formData.clearance === "ClearedWithRecommendations" && (
              <Grid item xs={12}>
                <TextField
                  label="Recommendations for Treatment"
                  name="recommendationsForTreatment"
                  value={formData.recommendationsForTreatment}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  InputProps={{ style: { backgroundColor: "white" } }}
                  
                />
              </Grid>
            )}
            {formData.clearance === "NotCleared" && (
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={pendingEvaluationChecked} onChange={handlePendingEvaluationChecked} />}
                  label="Pending further evaluation"
                />
                <FormControlLabel
                  control={<Checkbox checked={forAnySportsChecked} onChange={handleForAnySportsChecked} />}
                  label="For any sports"
                />
                <FormControlLabel
                  control={<Checkbox checked={forCertainSportsChecked} onChange={handleForCertainSportsChecked} />}
                  label="For certain sports"
                />
                {forCertainSportsChecked && (
                  <>
                    <TextField
                      label="Sports"
                      name="sports"
                      value={formData.sports}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{ style: { backgroundColor: "white" } }}
                      style={{ marginBottom: "16px",marginTop:"10px" }}
                    />
                    <TextField
                      label="Reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{ style: { backgroundColor: "white" } }}
                      style={{ marginBottom: "16px" }}
                    />
                    <TextField
                      label="Recommendations"
                      name="recommendations"
                      value={formData.recommendations}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{ style: { backgroundColor: "white" } }}
                      style={{ marginBottom: "16px" }}
                    />
                  </>
                )}
              </Grid>
            )}

          </>
        );
      case 6:
        return (
          <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={clearedForParticipation}
                    onChange={handleClearedForParticipationChange}
                    
                  />
                }
                label="I have examined the above-named student and completed the preparticipation physical evaluation. The athlete does not present apparent clinical contraindications to practice and participate in the sport(s) as outlined above."
                labelPlacement="end" // Aligns the label to the end of the checkbox
                style={{ marginLeft: "16px" }}
              />
              
            <Grid item xs={8}>
              <TextField
                label="Physician Name"
                name="physicianName"
                value={formData.physicianName}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                InputProps={{ style: { backgroundColor: "white" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            
          
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>

      <Container style={{ marginTop: '30px' }}>
        <img src={logo} alt="Logo" className="logo" />
        <Typography variant="h4" gutterBottom className="heading">
          Preparticipation Physical Evaluation
        </Typography>
        <Typography variant="h6" gutterBottom className="heading">
          PHYSICAL EXAMINATION FORM
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel style={{ marginTop: '30px' }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
      <Container maxWidth="md" className="container" >
        <form onSubmit={handleSubmit} >
          <Grid container spacing={3}>
            {getStepContent(activeStep)}
          </Grid>
          <div style={{ marginTop: "20px" }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} style={{ marginRight: "10px" }}>
                Back
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                value="submit"
                onClick={submitFun}
              >
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}  >
                Next
              </Button>
            )}
          </div>
        </form>
      </Container>
    </>
  );
};

export default PhysicianForm;
