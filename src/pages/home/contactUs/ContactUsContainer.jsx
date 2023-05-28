import GreenPageHeader from '../../../components/common/GreenPageHeader';
import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBarDivider from "../../../components/home/header/TopBarDivider";
import Box from "@mui/system/Box";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";

const textLinkWithIconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const textLinkStyle = {
    fontSize: 16,
    paddingLeft: {xs: 1},
    paddingRight: {xs: 1},
    fontFamily: 'Open Sans'
};

const iconStyle = {
    fontSize: 20
};

const ContactUsContainer = () => {
    const email = (
        <Box sx={textLinkWithIconContainerStyle}>
            <EmailIcon sx={iconStyle}/>
            <Typography sx={textLinkStyle}>Email: grocery@example.com</Typography>
        </Box>
    );
    const tel1 = (
        <Box sx={textLinkWithIconContainerStyle}>
            <PhoneIcon sx={iconStyle}/>
            <Typography sx={textLinkStyle}>Phone number: +373 - 123456789</Typography>
        </Box>
    );

    const tel2 = (
        <Box sx={textLinkWithIconContainerStyle}>
            <PhoneIcon sx={iconStyle}/>
            <Typography sx={textLinkStyle}>Phone number: +373 - 123456789</Typography>
        </Box>
    );

    const Map = () => (
        <div style={{display: "flex"}}>
            <div style={{flex: "50%", marginTop: 15, marginLeft: 10}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1360.0169074544162!2d28.82039764074051!3d47.01994126253901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAxJzExLjgiTiAyOMKwNDknMTYuNiJF!5e0!3m2!1sru!2s!4v1683375852491!5m2!1sru!2s"
                    width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div style={{flex: "50%", textAlign: "center"}}>
                <h2>Follow info below</h2>
                <h3>Contact info</h3>
                <Box>
                    <p>{tel1}</p>
                    <p>{tel2}</p>
                    <p>{email}</p>
                </Box>
                <h3>Location</h3>
                <p style={textLinkStyle} >Strada Alexei Mateevici 64, Chișinău</p>

            </div>
        </div>
    )

    return (
        <>
            <GreenPageHeader title="Contact us"/>
            <Map/>
        </>
    );
};

export default ContactUsContainer;
