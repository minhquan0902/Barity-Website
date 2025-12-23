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
    }
    return error;
  }
  function validateURL(value) {
    let error;
    if (value && !/^https?:\/\/.+\..+/i.test(value)) {
      error = "Invalid URL (must start with http:// or https://)";
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
                  companyName: "",
                  sector: "",
                  email: "",
                  website: "",
                  cexOrDex: "CEX",
                  country: "",
                  transactionVolume: "",
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
                          id="form_companyName"
                          type="text"
                          name="companyName"
                          placeholder="Company Name / Project Name"
                          required="required"
                        />
                        {errors.companyName && touched.companyName && (
                          <div>{errors.companyName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_sector"
                          type="text"
                          name="sector"
                          placeholder="Sector"
                          required="required"
                        />
                        {errors.sector && touched.sector && (
                          <div>{errors.sector}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateURL}
                          id="form_website"
                          type="text"
                          name="website"
                          placeholder="Website (e.g., https://example.com)"
                        />
                        {errors.website && touched.website && (
                          <div>{errors.website}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_country"
                          type="text"
                          name="country"
                          placeholder="Country"
                          required="required"
                        />
                        {errors.country && touched.country && (
                          <div>{errors.country}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <p>CEX or DEX?</p>
                      <Field
                        className="mt-1"
                        onChange={handleChange}
                        id="form_cexOrDex"
                        name="cexOrDex"
                        as="select"
                      >
                        <option value="CEX">CEX (Centralized Exchange)</option>
                        <option value="DEX">DEX (Decentralized Exchange)</option>
                        <option value="Both">Both</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_transactionVolume"
                        name="transactionVolume"
                        placeholder="How many transactions do you want to have for your project daily or monthly?"
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
