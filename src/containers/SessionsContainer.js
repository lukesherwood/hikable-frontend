import React from 'react'
import { fetchUsers } from '../actions/userActions'
import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

class SessionsContainer extends React.Component {

    render (){
        return(
            <div className="sign-up-container">
                <SignUp fetchUsers={this.props.fetchUsers}/>
            </div>
        )
    }
}
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(null, mapDispatchToProps)(SessionsContainer)