import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchHikes } from '../actions/hikeActions';
import Hikes from '../components/Hikes';
import PaginationComponent from '../components/PaginationComponent';
import FilterHikes from '../components/FilterHikes';

class HikesContainer extends React.Component {
  componentDidMount() {
    const { fetchHikes } = this.props;
    fetchHikes();
    document.title = 'Hikes | Hikable';
  }

  render() {
    const { fetchHikes, hikes, loading, pages, page, filterData } = this.props;
    return (
      <div className="hikes-container">
        <div className="justify-content-center">
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
            <>
              <FilterHikes />
              <Hikes hikes={hikes} />
            </>
          )}
          <PaginationComponent
            totalPages={pages}
            currentPage={page}
            fetchData={fetchHikes}
            filterData={filterData}
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
