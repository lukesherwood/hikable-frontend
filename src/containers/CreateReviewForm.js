import React, { Component } from "react";
import { connect } from "react-redux";
import { addReviewToHike } from "../actions/hikeActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dropzone from "react-dropzone";
import Thumb from "../components/Thumb";
import {Upload} from 'react-bootstrap-icons'

const validationSchema = Yup.object().shape({
  content: Yup.string().required("*Content is required"),
});
class CreateReviewForm extends Component {

  render() {
    return (
      <div >
        <br></br>
        <h2 className="header-theme p-2">New Review</h2>
        <div className="review-form">
        <Formik
          initialValues={{ content: "", rating: "", images: [] }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { content, rating, images } = values;
            const hikeId = this.props.hike.id || null;
            const userId = this.props.currentUser.id;
            let data = new FormData();
            images.map((img) => data.append("review[images][]", img));
            data.append("review[content]", content);
            data.append("review[rating]", rating);
            data.append("review[user_id]", userId);
            data.append("review[hike_id]", hikeId);
            this.props.addReviewToHike(data, hikeId);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({
            values,
            touched,
            errors,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
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
                    (errors.rating && touched.rating ? "is-invalid" : "")
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
              <Form.Group>
                <Form.Label size="sm"> Upload an Image </Form.Label>
                <Dropzone
                  accept="image/*"
                  onDrop={(acceptedFiles) => {
                    if (acceptedFiles.length === 0) {
                      return;
                    }
                    this.setState({ preview: acceptedFiles })
                    setFieldValue(
                      "images",
                      values.images.concat(acceptedFiles)
                    );
                  }}
                >
                  {({ getRootProps, getInputProps }) => {
                    return (
                      
                      <section>
                        <div className="dropzone" {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>
                            Drag-n-drop some files, or click to select
                            files
                          </p>
                          <Upload size="32"/>
                          <div className="thumbs">
                            {values.images.length > 0
                              ? 
                              values.images.map((file, i) => (
                                  <Thumb key={i} file={file} />
                                ))
                              : null}
                          </div>
                        </div>
                      </section>
                    );
                  }}
                </Dropzone>
              </Form.Group>
              <Button
                variant="primary"
                className="btn-custom"
                type="submit"
                disabled={isSubmitting}
              >
                Create Review
              </Button>
            </Form>
          )}
        </Formik>
        </div>
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
    addReviewToHike: (review, hikeId) =>
      dispatch(addReviewToHike(review, hikeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
