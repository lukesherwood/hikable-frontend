import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  keyword: Yup.string()
    .required("*Keyword is required"),
});
class SearchHikesForm extends Component {

  render() {
    return (
      <div className="search-form">
        <Formik
          initialValues={{ keyword: ""}}
          validationSchema={validationSchema}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { keyword } = values;
            this.props.searchHikes(keyword);
            setSubmitting(false);
            // document.getElementById("toggle-new-list-form") ? document.getElementById("toggle-new-list-form").click() : resetForm();
          }}
        >
          {({
            touched,
            errors,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={handleSubmit}>
              <Form.Group>
                <Field
                  type="search"
                  placeholder="Search for hikes"
                  className={'form-control ' + (errors.keyword && touched.keyword ? 'is-invalid' : '')}
                  size="sm"
                  name="keyword"
                />
                {/* <ErrorMessage name="keyword" size="sm" component="div" className="invalid-feedback"/> */}
              </Form.Group>
              <Button variant="outline-success" type="submit" disabled={isSubmitting}>
                Search
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
    // searchHikes: (hike) => dispatch(searchHikes(hike)),
  };
};

export default connect(null, mapDispatchToProps)(SearchHikesForm);
