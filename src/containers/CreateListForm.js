import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createList } from '../actions/listActions';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*required'),
  description: Yup.string()
    .max(500, '*Description must be less than 500 characters')
    .required('*required'),
});
class CreateListForm extends Component {
  render() {
    const { createList, currentUser } = this.props;
    return (
      <div className="list-form">
        <h3>Create a new list</h3>
        <Formik
          initialValues={{ name: '', description: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { name, description } = values;
            const list = {
              name,
              description,
              user_id: currentUser.id,
            };
            createList(list);
            setSubmitting(false);
            document.getElementById('toggle-new-list-form').click();
            resetForm();
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting }) => (
            <Form className="p-2" onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group className="col-md-6">
                  <Field
                    className={
                    'form-control ' +
                    (errors.name && touched.name ? 'is-invalid' : '')
                  }
                    size="sm"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group className="col-md-6">
                  <Field
                    className={
                    'form-control ' +
                    (errors.description && touched.description
                      ? 'is-invalid'
                      : '')
                  }
                    size="sm"
                    name="description"
                    placeholder="Description"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Button className="btn-custom" type="submit" disabled={isSubmitting}>
                  Create List
                </Button>
              </Form.Row>
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
