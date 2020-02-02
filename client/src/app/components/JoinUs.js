import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';
import TextField from './partials/TextField';
import PropTypes from 'prop-types';

class JoinUs extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 0,
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
        console.log(loginError) 
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
                                <TextField 
                                placeholder = 'First Name'
                                name = 'firstName'
                                type = 'text'
                                value = {this.state.firstName}
                                onChange = {this.onChange}
                                error = {signupError.firstName}
                                 />
                                <TextField
                                placeholder = 'Last Name'
                                name = 'lastName'
                                type = 'text'
                                value = {this.state.lastName}
                                onChange = {this.onChange}
                                error = {signupError.lastName}
                                 />
                                <TextField
                                placeholder = 'Email'
                                name = 'email'
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                error = {signupError.email}
                                 />
                                <TextField
                                placeholder = 'Password'
                                name = 'password'
                                type = 'password'
                                value = {this.state.password}
                                onChange = {this.onChange}
                                error = {signupError.password}
                                 />
                                <TextField
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
                            <TextField
                                placeholder = 'Email'
                                name = 'email'
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                 />
                                <TextField
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
JoinUs.PropTypes = { 
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { registerUser, loginUser })(withRouter(JoinUs));