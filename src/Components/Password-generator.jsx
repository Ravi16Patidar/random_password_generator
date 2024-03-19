import React, { Fragment, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { Button, Snackbar, Alert } from '@mui/material';




import "./style.css";
const label = "fjdklj";
const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] =
    useState("this is password");
  const [characterLength, setCharacterLength] = useState(5);
  const [upperCaseChecked, setUpperCaseChecked] = useState(true);
  const [lowerCaseChecked, setLowerCaseChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);
  const [openGenerateSnackbar, setOpenGenerateSnackbar] = useState(false);
  const [openCopySnackbar, setOpenCopySnackbar] = useState(false);
  const[strength,setStrength]=useState(0)

  const handleUpperCaseChecked = () => {
    setUpperCaseChecked(!upperCaseChecked)
    setStrength(strength+1)
};
useEffect(()=>{
},[upperCaseChecked])

  const handleLowerCaseChecked = () => {
    setLowerCaseChecked(!lowerCaseChecked)
    setStrength(strength+1)
  };
  const handleNumberChecked = () => {
    setNumberChecked(!numberChecked)
    setStrength(strength+1)
  };
  const handleSymbolChecked = () => {
    setSymbolChecked(!symbolChecked)
    setStrength(strength+1)
  };
  function generateRandomPassword(){
    let collectCharacters=''
    let newPassword=''

    if(upperCaseChecked){
      collectCharacters+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(lowerCaseChecked){
      collectCharacters+='abcdefghijklmnopqrstuvwxyz'
    }
    if(numberChecked){
      collectCharacters+='0987654321'
    }
    if(symbolChecked){
      collectCharacters+='!@#$%^&*()[]'
    }

    for(let i=0;i<characterLength;i++)
    {
      newPassword+=collectCharacters.charAt(Math.floor(Math.random()*collectCharacters.length))
    }
    setGeneratedPassword(newPassword)
    setOpenGenerateSnackbar(true)

  }
  const copyPassword=()=>{
    navigator.clipboard.writeText(generatedPassword)
    setOpenCopySnackbar(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpenCopySnackbar(false);
    setOpenGenerateSnackbar(false);
};
  return (
    <Fragment>
      <div className="container">
        {" "}
        {/* main container start */}
        <div className="password-container">
          {" "}
          {/* password container start */}
          <h1 className="generatedPasswordStyle">    {generatedPassword.length > 30 ? generatedPassword.slice(0, 40) + '...' : generatedPassword}
</h1>
          <Button variant="contained" color="success" onClick={copyPassword}>
        copy
      </Button>
      <Snackbar open={openCopySnackbar} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              color="info"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Password Copied Successfully
            </Alert>
          </Snackbar>
        </div>{" "}
        {/* password container end */}
        <div className="password-generator-container">
          {" "}
          {/* password generator container start */}
          <div className="chracterLengthContainer">
            <h3 style={{ fontSize: "20px", color: "#bbbac2" }}>
              Character Length
            </h3>
            <h3 style={{ fontSize: "25px", color: "#bbbac2" }}>
              {characterLength}
            </h3>
          </div>
          <div className="slider">
            <Slider
              size="large"
              defaultValue={5}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: "#a5ffaf" }}
              onChange={(e) => setCharacterLength(e.target.value)}
            />
          </div>
          <Box className="checkboxesStyle">
            <FormControlLabel
              control={
                <Checkbox
                  checked={upperCaseChecked}
                  onChange={handleUpperCaseChecked}
                  name="jason"
                  sx={{ color: "#bbbac2" }}
                />
              }
              label="Include Uppercase Letters"
              sx={{ color: "#bbbac2" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lowerCaseChecked}
                  onChange={handleLowerCaseChecked}
                  name="jason"
                  sx={{ color: "#bbbac2" }}
                />
              }
              label="Include Lowercase Letters"
              sx={{ color: "#bbbac2" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={numberChecked}
                  onChange={handleNumberChecked}
                  name="jason"
                  sx={{ color: "#bbbac2" }}
                />
              }
              label="Include Numbers"
              sx={{ color: "#bbbac2" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={symbolChecked}
                  onChange={handleSymbolChecked}
                  name="jason"
                  sx={{ color: "#bbbac2" }}
                />
              }
              label="Include Symbols"
              sx={{ color: "#bbbac2" }}
            />
          </Box>
          {/* strength container start */}
                <div className="strengthContainer">
                  <h3 style={{color:'#bbbac2',letterSpacing:'2px'}}>STRENGTH</h3>
                  <div style={{ display: 'flex', gap: '20px' }}>
                  {strength <= 1 ? <h3 style={{ color: '#bbbac2' }}>weak</h3> : (strength <= 3 ? <h3 style={{ color: '#bbbac2' }}>medium</h3> : <h3 style={{ color: '#bbbac2' }}>strong</h3>)}

    <div style={{ display: 'flex', gap: '5px' }}>
        <div className="strengthStyle" style={{ backgroundColor: strength >= 1 ? 'red' : '#18171f' }}></div>
        <div className="strengthStyle" style={{ backgroundColor: strength >= 2 ? 'gold' : '#18171f' }}></div>
        <div className="strengthStyle" style={{ backgroundColor: strength >= 3 ? 'gold' : '#18171f' }}></div>
        <div className="strengthStyle" style={{ backgroundColor: strength >= 4 ? 'green' : '#18171f' }}></div>
    </div>
</div>
                </div>
                <Button variant="contained" color="success" className="passwordGenerateButton" onClick={generateRandomPassword}>
        Generate
      </Button>
      <Snackbar open={openGenerateSnackbar} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              color="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Password Generated Successfully
            </Alert>
          </Snackbar>
          {/* strength container end */}

        </div>
        {/* password generator container end */}
      </div>
      {/* main container end */}
    </Fragment>
  );
};
export default PasswordGenerator;
