import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const InvestForm = () => {
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

  function validateLongText(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9.-]{1,60}$/i.test(value)) {
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
    <section className="contact section-padding mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Become our partner!</h4>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  orgName: "",
                  email: "",
                  phoneNumber: "",
                  realLifeApplication: "",
                  orgWebsite: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  emailjs
                    .send(
                      "service_2iuzvm4",
                      "template_miojdot",
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
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_orgName"
                          type="text"
                          name="orgName"
                          placeholder="Organization name"
                          required="required"
                        />
                        {errors.orgName && touched.orgName && (
                          <div>{errors.orgName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateRequired}
                          id="form_orgWebsite"
                          type="text"
                          name="orgWebsite"
                          placeholder="Organization Website"
                          required="required"
                        />
                        {errors.orgWebsite && touched.orgWebsite && (
                          <div>{errors.orgWebsite}</div>
                        )}
                      </div>
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
                          id="form_realLifeApplication"
                          type="text"
                          name="realLifeApplication"
                          placeholder="Real Life Application"
                        />
                        {errors.realLifeApplication &&
                          touched.realLifeApplication && (
                            <div>{errors.realLifeApplication}</div>
                          )}
                      </div>
                    </div>
                    <br />
                    <br />
                    <button type="submit" className="butn bord">
                      <span>Submit</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestForm;
