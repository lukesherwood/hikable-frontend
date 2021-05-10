import React from "react";
import { fetchHikes } from "../actions/hikeActions";
import { connect } from "react-redux";
import Hikes from "../components/Hikes";
import PaginationComponent from "../components/PaginationComponent";
// import SearchBar from '../components/SearchBar'
import Loader from "react-loader-spinner";
import FilterHikes from "../components/FilterHikes";

class HikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const { hikes } = this.props;
    const { loading } = this.props;
    return (
      <div className="hikes-container">
        <div className="justify-content-center">
          <FilterHikes fetchData={this.props.fetchHikes}/>
          {loading ? (
            <div className="vh-100 w-100">
              <Loader
                className="text-center"
                type="TailSpin"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>
          ) : (
            <Hikes hikes={hikes} />
          )}
          <PaginationComponent
            TotalPages={this.props.pages}
            CurrentPage={this.props.page}
            fetchData={this.props.fetchHikes}
            filterData={this.props.filterData}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.hikes.loading,
    hikes: state.hikes.hikes,
    page: state.hikes.page,
    pages: state.hikes.pages,
    filterData: state.hikes.filterData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHikes: (filterBy, keyword, page) => dispatch(fetchHikes(filterBy, keyword, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
