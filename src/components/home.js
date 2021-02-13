import React from 'react';
import '../components/style.css';
import { connect } from 'react-redux';
// import { set_state } from '../store/action/index.js'
import {    facebook_login } from '../store/action/index.js'

class Home extends React.Component
{
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props);
    //     return{
    //     }
    // }   
    render()
    {
        return(
            <div>

                {/* <button onClick={()=>this.props.set_state()}>BUTTON</button> */}
                <button onClick={()=>this.props.facebook_login(this.props.history)}>Facebook login</button>
               
            </div>
        )   
    }
}

const mapStateToProps = (state) =>({
user: state.user,
name: state.name
})
const mapDispatchToProp = (dispatch) =>({
    // set_state:()=> dispatch(set_state()),
    facebook_login:(history)=> dispatch(facebook_login(history))
    })
export default connect(mapStateToProps,mapDispatchToProp)(Home);