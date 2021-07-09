import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import emailjs from "emailjs-com";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function SubscribeSection() {

  const [params, setParams] = useState({
    from_name: "",
    institution: "",
    email: "",
    interest: "",
    message: ""
  })

  const handleNameChange = (event) => {
    setParams({
      ...params,
      from_name: event.target.value
    })
  }

  const handleInstitutionChange = (event) => {
    setParams({
      ...params,
      institution: event.target.value
    })
  }

  const handleEmailChange = (event) => {
    setParams({
      ...params,
      email: event.target.value
    })
  }

  const handleInterestChange = (event) => {
    setParams({
      ...params,
      interest: event.target.value
    })
  }

  const handleMessageChange = (event) => {
    setParams({
      ...params,
      message: event.target.value
    })
  }

  function handleSumbit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_qtjgu2b",
        "geotop_form",
        params,
        "user_ACWbrTNybMU7EJa0oRaUL"
      )
      .then(
        (result) => {
          alert("Email sent succesfully!");
        },
        (error) => {
          alert("Error");
        }
      )
  }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 style={{margin: "0px 0px 50px 0px", minHeight:"32px", textDecoration:"none", 
          textAlign:"center", color:"#3C4858", fontWeight: "bold", fontFamily: `"Roboto Slab", "Times New Roman", "serif"`, 
          fontSize:"2rem"}}>Subscribe to GEOTOP-A</h2>
          <h4 className={classes.description}>
            Send us your details to receive automatic reminders of upcoming seminars
          </h4>
          <form onSubmit={handleSumbit} id="contact_form">
            <CustomInput
              labelText="Full Name"
              id="from_name"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                name: "from_name",
                onChange: handleNameChange
              }}
            />
            <CustomInput
              labelText="Email (institutional, if possible)"
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                name: "email",
                onChange: handleEmailChange
              }}
            />
            <CustomInput
              labelText="Institution/University"
              id="institution"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                name: "institution",
                onChange: handleInstitutionChange
              }}
            />
            <CustomInput
              labelText="Areas of interest"
              id="interest"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 2,
                name: "interest",
                onChange: handleInterestChange
              }}
            />
            <CustomInput
              labelText="Optional message"
              id="message"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 2,
                name: "message",
                onChange: handleMessageChange
              }}
            />
          </form>
          <Button color="primary" type='submit' form="contact_form">Send Message</Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}