import React from 'react'
import { connect } from 'react-redux'
import { userLoginSuccess, userLoginFail } from '../actions/actions'
import { db } from './RegisterForm'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uName: ''
        }
    } 
    render() {
        const { onSuccess, onFailure, userLoginStatus } = this.props;
        
        return(
            <div>
                <form
                    onSubmit = {e => {
                        e.preventDefault();
                        let inName = this.inName.value;
                        let inPasswd = this.inPasswd.value;
                        console.log(inName + ':' + inPasswd);
                        
                        if(inName && inPasswd) {
                            const successful = (db.filter(e => e.name === inName && e.password === inPasswd).length > 0)
                            
                            if (successful) {
                                onSuccess()
                            } else {
                                onFailure()
                            }

                            this.inName.value = "";
                            this.inPasswd.value = "";
                        }
                    }}
                >
                    <h1>LoginForm</h1>
                    <span>Username</span><input type="text" ref={i => this.inName = i} onChange={e => this.setState({uName: this.inName.value})}  /><br/>
                    <span>Password</span><input type="password" ref = {i => this.inPasswd = i} /><br/>
                    <button type="submit">Login</button>
                    <Link to='/App' ><button>Home</button></Link><br/>
                    {userLoginStatus === true && `Logged in! Welcome ${this.state.uName}` }<br/>
                    {userLoginStatus === false && "Check your details, couldn't log in"}<br/>
                </form>
            </div>
        )
    }
}
//onChange={e => this.setState({uName: e.target.value}, )
const mapStateToProps = (state) => ({
    userLoginStatus: state.user.loginStatus
})
const mapDispatchToProps = (dispatch) => ({
    onSuccess: () => dispatch(userLoginSuccess()),
    onFailure: () => dispatch(userLoginFail())
})

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginForm