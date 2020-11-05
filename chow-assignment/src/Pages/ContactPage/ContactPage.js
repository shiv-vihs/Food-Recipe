import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledButton,
  ShareContainer,
  Facebook,
  Twitter,
  GooglePlus,
  StyledSearch,
  FieldHeading,
  FormHeading,
  SpanHeading,
  Heading,
  Contact,
  ImageDiv,
  OuterContainer,
  LeftContainer,
  RightContainer,
} from "./styles";
import ContactPhoto from "../../Assets/contact.jpg";
//const MyContext= React.createContext();
const ContactPage = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [message, messageChange] = useState("");
  const [errors, errorChange] = useState({});
  const [success, successChange] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const clickHandler = () => {
    let errors = {};
    let formIsValid = true;

    //Name
    if (!name) {
      console.log("inside");
      formIsValid = false;
      errors["name"] = "Field cannot be empty";
      successChange("");
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Name must contain only Letters";
        successChange("");
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Field cannot be empty";
      successChange("");
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email entered is not valid";
        successChange("");
      }
    }

    errorChange(errors);
    if (formIsValid) {
      const postData = { name: name, email: email, message: message };
      axios
        .post("https://foodrecipejson.firebaseio.com/.json", postData)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            successChange("Successfully submitted details");
            window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
          }
        });
    }
  };

  return (
    <>
      <Heading>
        <Contact>
          <span>Contact Page</span>
        </Contact>
      </Heading>

      <ImageDiv background={ContactPhoto}></ImageDiv>
      <OuterContainer>
        <LeftContainer>
          <SpanHeading>
            <FormHeading>Contact Form</FormHeading>
          </SpanHeading>
          <p style={{ color: "green" }}>{success}</p>
          <FieldHeading>Name:</FieldHeading>
          <span style={{ color: "red" }}>{errors["name"]}</span>
          <StyledSearch onChange={(event) => nameChange(event.target.value)} />

          <FieldHeading>Email:</FieldHeading>
          <span style={{ color: "red" }}>{errors["email"]}</span>
          <StyledSearch onChange={(event) => emailChange(event.target.value)} />
          {/* <MyContext.Consumer>
                            {(value)=>(
                                <StyledSearch value={value.state.enteredEmail} />
                            )}
                        
                        </MyContext.Consumer> */}
          <FieldHeading>Message:</FieldHeading>
          <StyledSearch
            onChange={(event) => messageChange(event.target.value)}
          />
          <StyledButton onClick={() => clickHandler()}>
            SEND MESSAGE
          </StyledButton>
        </LeftContainer>
        <RightContainer>
          <ShareContainer>
            <SpanHeading>
              <FormHeading>Share</FormHeading>
            </SpanHeading>
            <Facebook>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </Facebook>
            <Twitter>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </Twitter>
            <GooglePlus>
              <i class="fa fa-google-plus" aria-hidden="true"></i>
            </GooglePlus>
          </ShareContainer>
        </RightContainer>
      </OuterContainer>
    </>
  );
};
export default ContactPage;
