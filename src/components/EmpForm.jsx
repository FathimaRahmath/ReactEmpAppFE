import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const EmpForm = () => {
    return (
      <div >
    <Container sx={{ mt: 4, pt: 4 }} >
     
          <Grid container justifyContent="center">
              
        <Grid item xs={12} sm={8} md={6} >
                  <Paper elevation={3} sx={{ p: 4 }} style={{background:'#B2FFFF'}}>
                       <Typography variant="h4" align="center" color="primary" gutterBottom>EMPLOYEE FORM</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Designation" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Location" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Salary" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth type="submit">Submit</Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container></div>
  );
};

export default EmpForm;
