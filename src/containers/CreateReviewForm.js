import React, { Component } from "react";
import { connect } from "react-redux";
import { addReviewToHike } from "../actions/hikeActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  content: Yup.string()
    .required("*Content is required"),
});
class CreateReviewForm extends Component {
  render() {
    return (
      <div className="review-card">
        <br></br>
        <h3>New Review</h3>
        <Formik
          initialValues={{ content: "", rating: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { content, rating } = values;
            let review = {
              content,
              rating,
              user_id: this.props.currentUser.id,
              hike_id: this.props.hike.id,
            };
            this.props.addReviewToHike(review);
            setSubmitting(false);
            resetForm()
            // document.getElementById("toggle-new-list-form")
            //   ? document.getElementById("toggle-new-list-form").click()
            //   : resetForm();
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label size="sm">Content</Form.Label>
                <Field
                  className={
                    "form-control " +
                    (errors.content && touched.content ? "is-invalid" : "")
                  }
                  size="sm"
                  as="textarea"
                  name="content"
                  />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-danger"
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label size="sm">Rating</Form.Label>
                <Field
                  as="select"
                  className={
                    "form-control " +
                    (errors.rating && touched.rating
                      ? "is-invalid"
                      : "")
                  }
                  size="sm"
                  name="rating"
                >
                  <option defaultValue>Choose Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>
              <Button variant="primary" className="btn-custom" type="submit" disabled={isSubmitting}>
                Create Review
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReviewToHike: (review) => dispatch(addReviewToHike(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
