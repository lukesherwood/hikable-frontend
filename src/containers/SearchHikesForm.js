import React, { Component } from "react";
import { connect } from "react-redux";
import { searchHikes } from '../actions/hikeActions'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field } from "formik";
// import * as Yup from "yup";
import ModalHikes from '../components/ModalHikes'


// const validationSchema = Yup.object().shape({
//   keyword: Yup.string()
//     .required("*Keyword is required"),
// });

class SearchHikesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {modalShow: false  }
  }

  render() {
    return (
      <div className="search-form">
        <ModalHikes
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow: false})
        }
          hikes={this.props.hikes}
        />
        <Formik
          initialValues={{ keyword: ""}}
          // validationSchema={validationSchema}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const { keyword } = values;
            this.props.searchHikes(keyword);
            setSubmitting(false);
            this.setState({modalShow: true})
            // we want to set modal to show 
            resetForm();
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
const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.searchHikes, // change this to be the received hikes from server
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchHikes: (keyword) => dispatch(searchHikes(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHikesForm);
