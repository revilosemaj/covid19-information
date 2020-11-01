import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Footer = () => {
    return (
        <React.Fragment >
            <CssBaseline />
            <Container maxWidth="false" disableGutters="true">
            <Typography component="div" style={{ backgroundColor: '#333', height: '80px', color: '#fff' }} value='Footer' />
            </Container>
        </React.Fragment>
    );
}

export default Footer;