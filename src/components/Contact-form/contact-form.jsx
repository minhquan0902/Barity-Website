import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  function validateRequired(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9.-]{1,30}$/i.test(value)) {
      error = "Invalid input";
    }
    return error;
  }
  function validatePhone(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[0-9]{1,11}$/i.test(value)) {
      error = "Invalid input";
    }
    return error;
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  message: "",
                  email: "",
                  phoneNumber: "",
                  investmentAmount: "",
                  period: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  emailjs
                    .send(
                      "service_2iuzvm4",
                      "template_cu8iwqj",
                      values,
                      "W1fzE3GyiAJLya3A2"
                    )
                    .then(
                      (result) => {
                        console.log(result);
                        messageRef.current.innerText =
                          "Your Message has been successfully sent. I will contact you soon.";

                        // Reset the values
                        resetForm();

                        // clear message
                        setTimeout(() => {
                          messageRef.current.innerText = "";
                        }, 2000);
                      },
                      (error) => {
                        messageRef.current.innerText = `Error Sending email: ${error.text}`;
                        setTimeout(() => {
                          messageRef.current.innerText = "";
                        }, 2000);
                      }
                    );
                }}
              >
                {({ errors, touched, handleChange }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_firstName"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          required="required"
                        />
                        {errors.firstName && touched.firstName && (
                          <div>{errors.firstName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_lastName"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          required="required"
                        />
                        {errors.lastName && touched.lastName && (
                          <div>{errors.lastName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validatePhone}
                          id="form_phoneNumber"
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          required="required"
                        />
                        {errors.phoneNumber && touched.phoneNumber && (
                          <div>{errors.phoneNumber}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_investmentAmount"
                          type="text"
                          name="investmentAmount"
                          placeholder="Investment Amount (in AUD)"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <p>Investment Period</p>

                      <Field
                        className="mt-1"
                        onChange={handleChange}
                        id="form_period"
                        name="period"
                        as="select"
                      >
                        <option value="6 months">6 Months</option>
                        <option value="1 year">1 Year</option>
                        <option value="3 years">3 Years</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Reason for investment"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a>{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              {/* <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div> */}
              <div className="social mt-50">
                <a
                  href="https://www.linkedin.com/company/barity/"
                  className="icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
