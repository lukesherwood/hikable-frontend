import React, { Component } from "react";
import { connect } from "react-redux";
// import { searchHikes } from '../actions/hikeActions'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Formik, Field } from "formik";
import Fuse from "fuse.js";
// import * as Yup from "yup";
import ModalHikes from "../components/ModalHikes";
class SearchHikesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, results: [], keyword: "" };
  }

  fuseSearch = (keyword) => {
    const hikes = this.props.hikes;
    const fuse = new Fuse(hikes, {
      threshold: 0.3,
      keys: ["title", "difficulty", "location", "description"],
    });
    const matches = fuse.search(keyword);
    return matches.map(({ item }) => {
      return item;
    });
  };

  render() {
    return (
      <Nav className="search-bar-nav">
        <ModalHikes
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          keyword={this.state.keyword}
          hikes={this.state.results}
        />
        <Formik
          initialValues={{ keyword: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.setState({ keyword: values });
            const results = this.fuseSearch(this.state.keyword.keyword);
            this.setState({ results });
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
              </Form.Group>
              <Form.Group className="pl-0 pr-0">
                <Button
                  eventKey="4" 
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
      </Nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.hikes, // change this to be the received hikes from server
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchHikes: (keyword) => dispatch(searchHikes(keyword)),
//   };
// };

export default connect(mapStateToProps, null)(SearchHikesForm);
