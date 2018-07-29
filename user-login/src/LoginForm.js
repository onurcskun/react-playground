import React from 'react'
import { connect } from 'react-redux'
import { userLoginSuccess, userLoginFail } from './actions/actions'

const db = [
    {
        name: 'onur',
        password: '123123'
    }
]

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uName: '',
            uPasswd: ''
        }
    } 
    render() {
        const { onSuccess, onFailure, userLoginStatus } = this.props;

        return(
            <div>
                <form
                    onSubmit = {e => {
                        e.preventDefault()
                        console.log(this.state.uName + ':' + this.state.uPasswd);
                        if(this.state.uName && this.state.uPasswd) {
                            const successful = (db.filter(e => e.name === this.state.uName && e.password === this.state.uPasswd).length > 0)
                            
                            
                            if (successful) {
                                onSuccess()
                            } else {
                                onFailure()
                            }
                            return 
                        }
                        
                    }}
                >
                    <input type="text" onChange={e => this.setState({uName: e.target.value})} />
                    <input type="password" onChange={e => this.setState({uPasswd: e.target.value})} />
                    <button type="submit">Login</button>
                    {userLoginStatus === true && "Logged in"}
                    {userLoginStatus === false && "Check your details, couldn't log in"}

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLoginStatus: state.user.loginStatus
})
const mapDispatchToProps = (dispatch) => ({
    onSuccess: () => dispatch(userLoginSuccess()),
    onFailure: () => dispatch(userLoginFail())
})

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginForm