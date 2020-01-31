import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';
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
            role: 0
        };
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
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
        this.props.login(loginDetails, this.props.history)
    }
    signupUser(e) {
        e.preventDefault();
        const signupDetails = { ...this.state }
        this.props.register(signupDetails, this.props.history);
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
                                <div className="col-md-12 form-group">
                                    <label htmlFor="firstName"> First Name</label>
                                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} className="form-control" />
                                    {signupError ? <i style={style}> {signupError.errors.firstName} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} className="form-control" />
                                    {signupError ? <i style={style}> {signupError.errors.lastName} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                                    {signupError ? <i style={style}> {signupError.errors.email} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
                                    {signupError ? <i style={style}> {signupError.errors.password} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} className="form-control" />
                                    {signupError ? <i style={style}> {signupError.errors.confirmPassword} </i> : null
                                    }
                                </div>
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
                            loginError ?
                                <div className="alert alert-danger"> {loginError.message || loginError.errors.password || loginError.errors.email} </div> : null
                        }
                        <form onSubmit={this.signinUser.bind(this)}>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
                                </div>
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
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, {register: registerUser, login: loginUser})(withRouter(JoinUs));