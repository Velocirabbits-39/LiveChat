import React, { Component } from 'react'
import { connect } from 'react-redux'


// import both login and chatroom componenets


const mapStateToProps = state => ({
    //enter needed login state info for props here

    //enter needed chatroom state info for props here

})

const mapDispatchToProps = dispatch => ({
    //enter needed login state actions for props here

    //enter needed chatroom state actions for props here

})

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }

    //render out both components with their necessary props
    render() {
        return (
            <div className='mainContainer'>
                <h1> test test </h1>
            </div>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)