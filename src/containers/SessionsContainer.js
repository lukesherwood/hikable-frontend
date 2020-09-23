import React from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

class SessionsContainer extends React.Component {

    render (){
        return(
            <div className="sign-up-container">
            <SignUp/>
            <SignIn/>
            </div>
        )
    }
}


export default SessionsContainer