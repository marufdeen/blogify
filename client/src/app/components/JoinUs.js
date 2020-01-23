import React from 'react';
import axios from 'axios';

export default class JoinUs extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            role: 0,
            sinupError: null,
            successMessage: null,
            loginError: null
        };
        this.onChange = this.onChange.bind(this);
    }

    loginUser(e) {
        e.preventDefault();
        const loginDetails = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:5000/api/v3/login', loginDetails)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ loginError: err.response.data }));
    }
    registerUser(e) {
        e.preventDefault();
        const signupDetails = { ...this.state }
        axios.post('http://localhost:5000/api/v3/register', signupDetails)
            .then(res => this.setState({ successMessage: res.data }))
            .catch(err => this.setState({ sinupError: err.response.data }))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { sinupError, successMessage, loginError } = this.state;

        const style = {
            color: 'red',
            fontSize: '13px',
            fontWeight: 'bold'
        };
        return (
            <div className="container">
                <div className="row blog-entries">
                    <div className="col-md-6 col-lg-6 main-content" id="signup">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Register</h1>
                            </div>
                        </div>
                        {
                            successMessage ?
                                <div className="alert alert-success"> You are successfully registered. </div> : null
                        }
                        <form onSubmit={this.registerUser.bind(this)}>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="firstName"> First Name</label>
                                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} className="form-control" />
                                    {sinupError ? <i style={style}> {sinupError.errors.firstName} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} className="form-control" />
                                    {sinupError ? <i style={style}> {sinupError.errors.lastName} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                                    {sinupError ? <i style={style}> {sinupError.errors.email} </i> : ''}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
                                    {sinupError ? <i style={style}> {sinupError.errors.password} </i> : '' }
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} className="form-control" />
                                    {sinupError ? <i style={style}> {sinupError.errors.confirmPassword} </i> : null
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
                        <form onSubmit={this.loginUser.bind(this)}>
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
