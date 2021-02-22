import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { fetchUser } from "../actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

class SignIn extends Component {

  render() {
    return (
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { email, password } = values;
            let user = {
              email,
              password,
            };
            this.props.fetchUser(user);
            resetForm();
            setSubmitting(false);
            this.props.history.push("/");
          }}
        >
          {({
            touched,
            errors,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label size="sm">Email</Form.Label>
                    <Field
                      className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')}
                      size="sm"
                      name="email"
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={4}>
                  <Form.Group>
                    <Form.Label size="sm">Password</Form.Label>
                    <Field
                      className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')}
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <br></br>
        <div>
          Don't have an account? <Link to="/signUp">Register</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
