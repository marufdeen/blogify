import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';
import InputField from './partials/InputField';
import propTypes from 'prop-types';

class JoinUs extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            signupError: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            loginError: {
                message: ''
            }
        };
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        if (nextProps.errors) {
            this.setState({
                signupError: nextProps.errors,
                loginError: nextProps.errors
            })
        }
    }
    signinUser(e) {
        e.preventDefault();
        const loginDetails = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(loginDetails, this.props.history)
    }
    signupUser(e) {
        e.preventDefault();
        const signupDetails = { ...this.state }
        this.props.registerUser(signupDetails, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { signupError, loginError } = this.state;
        const style = { color: 'red', fontSize: '13px' };
        
        return (
            <div className="container">
                <div className="row blog-entries">
                    <div className="col-md-6 col-lg-6 main-content" id="signup">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <form onSubmit={this.signupUser.bind(this)}>
                            <div className="row">
                                <InputField 
                                placeholder = 'First Name'
                                name = 'firstName'
                                type = 'text'
                                value = {this.state.firstName}
                                onChange = {this.onChange}
                                error = {signupError.firstName}
                                 />
                                <InputField
                                placeholder = 'Last Name'
                                name = 'lastName'
                                type = 'text'
                                value = {this.state.lastName}
                                onChange = {this.onChange}
                                error = {signupError.lastName}
                                 />
                                <InputField
                                placeholder = 'Email'
                                name = 'email'
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                error = {signupError.email}
                                 />
                                <InputField
                                placeholder = 'Password'
                                name = 'password'
                                type = 'password'
                                value = {this.state.password}
                                onChange = {this.onChange}
                                error = {signupError.password}
                                 />
                                <InputField
                                placeholder = 'Confirm Password'
                                name = 'confirmPassword'
                                type = 'password'
                                value = {this.state.confirmPassword}
                                onChange = {this.onChange}
                                error = {signupError.confirmPassword}
                                 />
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" value="Create Account" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-6 main-content" id="signin">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Login</h1>
                            </div>
                        </div>
                         {
                            loginError.message ?
                            <div className="alert alert-danger"> {loginError.message } </div> : null
                        }  
                        <form onSubmit={this.signinUser.bind(this)}>
                            <div className="row">
                            <InputField
                                placeholder = 'Email'
                                name = 'email'
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                 />
                                <InputField
                                placeholder = 'Password'
                                name = 'password'
                                type = 'password'
                                value = {this.state.password}
                                onChange = {this.onChange}
                                 />
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
JoinUs.propTypes = { 
    registerUser: propTypes.func.isRequired,
    loginUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { registerUser, loginUser })(withRouter(JoinUs));