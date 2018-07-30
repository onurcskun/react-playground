import React from 'react'
import { connect } from 'react-redux'
import { userRegisterSuccess, userRegisterFail } from '../actions/actions'
import { Link } from 'react-router-dom'

export let db = [
    {
        name: 'onur',
        password: '123'
    }
]

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uName: '',
            uPasswd: ''
        }
    } 

    addUser() {
        let uName = this.newUserName.value;
        let uPasswd = this.newUserPasswd.value;
        this.newUserName.value = "";
        this.newUserPasswd.value = "";

        if(uName === "" || uPasswd === "") return this.props.onFailure();
        else if(db.filter(e => e.name === uName).length > 0) return this.props.onFailure();
        else {
            let temp = [...db];
            let newUser = {
                name: uName,
                password: uPasswd
            }

            temp.push(newUser);
            db = temp;
            
            return this.props.onSuccess();
        }
    }
    
    render() {
        const {userRegisterStatus } = this.props;
        
        return(
            <div>
                <form
                    onSubmit = {e => {
                        e.preventDefault()
                        console.log(db);
                    }}
                >
                    <h1>RegisterForm</h1>
                    <span>Username</span><input type="text" ref={i => this.newUserName = i} onChange={e => this.setState({uName: this.newUserName.value})} /><br/>
                    <span>Password</span><input type="password" ref={i => this.newUserPasswd = i} onChange={e => this.setState({uPasswd: this.newUserPasswd.value})} /><br/>
                    <button type="submit" onClick={this.addUser.bind(this)}>Register</button>
                    <Link to='/App' ><button>Home</button></Link><br/>
                    {userRegisterStatus === true && `Registration Succesful, Enjoy,${this.state.uName}`}<br/>
                    {userRegisterStatus === false && "Check your details, Registration failed"}<br/>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userRegisterStatus: state.newUser.registerStatus
})
const mapDispatchToProps = (dispatch) => ({
    onSuccess: () => dispatch(userRegisterSuccess()),
    onFailure: () => dispatch(userRegisterFail())
})

RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)

export default RegisterForm

