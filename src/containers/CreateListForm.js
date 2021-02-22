import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../actions/listActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  description: Yup.string()
    .max(500, "*Description must be less than 500 characters")
    .required("*Description is required"),
});
class CreateListForm extends Component {

  render() {
    return (
      <div className="list-card">
        <h3>Create a new list</h3>
        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={validationSchema}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { name, description } = values;
            let list = {
              name: name,
              description: description,
              user_id: this.props.currentUser.id,
            };
            this.props.createList(list);
            resetForm();
            setSubmitting(false);
            document.getElementById("toggle-new-list-form").click();
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form inline onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label size="sm">Name</Form.Label>
                <Form.Control
                  type="text"
                  className={
                    "mb-2 mr-sm-2 " + touched.name && errors.name
                      ? 'is-invalid'
                      : null
                  }
                  size="sm"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage name="name" component="div" className="text-danger"/>
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm">Description</Form.Label>
                <Field
                  className={ "mb-2 mr-sm-2 " +
                  touched.description && errors.description
                      ? 'is-invalid'
                      : null
                  }
                  size="sm"
                  name="description"
                />
                <ErrorMessage name="description" component="div" className="text-danger"/>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Create List
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (listInfo) => dispatch(createList(listInfo)),
  };
};

export default connect(null, mapDispatchToProps)(CreateListForm);
