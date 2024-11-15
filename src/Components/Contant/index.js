import React from "react";
import {
  ContantSec,
  ConTitle,
  Span,
  Form,
  FormInput,
  TxtInput,
  EmailInput,
  ExpInput,
  Textarea,
  Submit,
} from "./Contant.js";
const Contact = () => {
  return (
    <ContantSec>
      <div className="container">
        <ConTitle>
          <Span>Drop </Span>me a line
        </ConTitle>
        <Form action="">
          <FormInput>
            <TxtInput type="text" placeholder="Your Name" />
            <EmailInput type="email" placeholder="Your Email" />
          </FormInput>
          <ExpInput type="text" className="sub" placeholder="Your Subject" />
          <Textarea placeholder="Your Message"></Textarea>
          <Submit type="submit" value="Send Message" />
        </Form>
      </div>
    </ContantSec>
  );
};

export default Contact;
