/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUserUp } from '../actions/userActions';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('username is required')
    .min(2, 'Username is too short - should be 2 chars minimum'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
  password_confirmation: Yup.string()
    .required('Confirmation password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

class Signup extends Component {
  render() {
    const { loggedIn, signUserUp, history } = this.props;
    return (
      loggedIn ? <Navigate to="/" /> : (
        <div className="sessions-container">
          <h2 className="recipe-header">Sign Up</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
              username: '',
              password_confirmation: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const { username, email, password, password_confirmation } = values;
              const user = {
                username,
                email,
                password,
                password_confirmation,
              };
              signUserUp(user);
              history.goBack();
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ touched, errors, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label size="sm">Username</Form.Label>
                  <Field
                    className={
                    'form-control ' +
                    (errors.username && touched.username ? 'is-invalid' : '')
                  }
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label size="sm">Email</Form.Label>
                  <Field
                    className={
                    'form-control ' +
                    (errors.email && touched.email ? 'is-invalid' : '')
                  }
                    name="email"
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label size="sm">Password</Form.Label>
                  <Field
                    className={
                    'form-control ' +
                    (errors.password && touched.password ? 'is-invalid' : '')
                  }
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Field
                    className={
                    'form-control ' +
                    (errors.password_confirmation &&
                    touched.password_confirmation
                      ? 'is-invalid'
                      : '')
                  }
                    name="password_confirmation"
                    type="password"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Button variant="primary" className="btn-custom" type="submit" disabled={isSubmitting}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <br />
          <div className="p-20">
            Already have an account? <Link to="/signIn">Sign In</Link>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
