// eslint-disable-next-line
import React, {useState, useEffect} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const GridList = (title, volume) => {
    return (
              <Grid 
                xs={4} 
                spacing={3} 
             >
                <Box borderRadius="10px" style={{
                    border: "2px solid #3f51b5", 
                    margin: "20px",
                    textAlign: "center",
                    padding: "10px",
                    color: "#3f31b5"
                }}  >
                    <h1>{title}</h1>
                    <p>{volume}</p>  
                </Box>
              </Grid>
    );
  }

const Content = props => {
    return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                <Typography component="div" />
                <Grid container justify="center" style={{marginTop: "50px"}} spacing={2}>
                {GridList("Total Cases", props.data.cases)}
                {GridList("Today Cases", props.data.todayCases)}
                {GridList("Total Deaths", props.data.deaths)}
                {GridList("Recovered", props.data.recovered)}
                {GridList("Active Cases", props.data.active)}
                {GridList("Total Tests", props.data.tests)}
                </Grid>
                </Container>
            </React.Fragment>
  );
}

export default Content;






