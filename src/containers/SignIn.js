import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchUser } from '../actions/userActions';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

class SignIn extends Component {
  render() {
    const { loggedIn, fetchUser, history } = this.props;
    return (
      loggedIn ? <Navigate to="/" /> : (
        <div className="sessions-container">
          <h2 className="recipe-header">Sign In</h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const { email, password } = values;
              const user = {
                email,
                password,
              };
              fetchUser(user);
              history.goBack();
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ touched, errors, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label size="sm">Email</Form.Label>
                  <Field
                    className={
                    'form-control ' +
                    (errors.email && touched.email ? 'is-invalid' : '')
                  }
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
                <Button
                  variant="primary"
                  className="btn-custom"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <br />
          <div>
            Already have an account? <Link to="/signUp">Register</Link>
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
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
