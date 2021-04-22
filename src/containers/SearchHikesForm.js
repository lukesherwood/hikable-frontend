import React, { Component } from "react";
import { connect } from "react-redux";
// import { searchHikes } from '../actions/hikeActions'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
// import Fuse from "fuse.js";
import * as Yup from "yup";
import ModalHikes from "../components/ModalHikes";
import { searchHikes } from '../actions/hikeActions'

const validationSchema = Yup.object().shape({
  keyword: Yup.string()
    .required("Input is required")
    .min(2, "Input is too short - should be 2 chars minimum"),
});

class SearchHikesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, results: [], keyword: "" };
  }

  // fuseSearch = (keyword) => {
  //   const hikes = this.props.hikes;
  //   const fuse = new Fuse(hikes, {
  //     threshold: 0.3,
  //     keys: ["title", "difficulty", "location", "description"],
  //   });
  //   const matches = fuse.search(keyword);
  //   return matches.map(({ item }) => {
  //     return item;
  //   });
  // };


  render() {
    return (
      <div className="search-bar-nav ml-auto">
        <ModalHikes
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })} // might be able to clear hikes from state here aswell so that you can't see results of hike a second time
          keyword={this.state.keyword}
          hikes={this.props.hikes}
        />
        <Formik
          initialValues={{ keyword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.setState({ keyword: values });
            this.props.searchHikes(this.state.keyword.keyword);
            setSubmitting(false);
            this.setState({ modalShow: true });
            resetForm();
          }}
        >
          {({ touched, errors, handleSubmit, isSubmitting }) => (
            <Form className="row w-100" onSubmit={handleSubmit}>
              <Form.Group className="col pr-0">
                <Field
                  type="search"
                  placeholder="Search for hikes"
                  className={
                    "form-control " +
                    (errors.keyword && touched.keyword ? "is-invalid" : "")
                  }
                  size="sm"
                  name="keyword"
                />
                <ErrorMessage
                  name="keyword"
                  component="div"
                  style={{fontSize: "0.75rem"}}
                  className="invalid-feedback text-sm"
                />
              </Form.Group>
              <Form.Group className="pl-0 pr-0">
                <Button
                  variant="outline-success"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Search
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.searchHikes // change this to be the received hikes from server
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchHikes: (keyword) => dispatch(searchHikes(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHikesForm);
