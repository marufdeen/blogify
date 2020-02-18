import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import InputField from '../partials/InputField';
import TextArea from '../partials/TextArea';
import SelectField from '../partials/SelectField';
import UploadField from '../partials/UploadField';
import {createProfile} from '../../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true,
            userId:  this.props.auth.user.userId,
            profilePicture: '',
            company: '',
            website: '',
            location: '',
            profession: '',
            skills: '',
            github: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedIn: '',
            profileError: {
            profilePicture: '',
            company: '',
            website: '',
            location: '',
            profession: '',
            skills: '',
            github: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedIn: ''
            }
        }; 
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ profileError: nextProps.errors })
        }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('pillow' , this.props.auth.user.userId)
        const profileData = {...this.state }
       this.props.createProfile(profileData, this.props.history)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { user } = this.props.auth;
        const { profileError } = this.state;
        const options = [
            { label: 'Select profession', value: 0 },
            { label: 'Educationist', value: 'education' },
            { label: 'Health', value: 'health' },
            { label: 'Technology', value: 'tech' },
            { label: 'Engineering', value: 'engineering' },
            { label: 'Business', value: 'business' },
            { label: 'Sport', value: 'sport' },
            { label: 'Entertainment', value: 'entertainment' },
            { label: 'Politics', value: 'politics' },
            { label: 'Fashion', value: 'fashion' }
        ];
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h1> Create Profile</h1>
                    </div>
                </div>
                <div className="row blog-entries">
                    <div className="col-md-12 col-lg-8 main-content">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <UploadField
                                label='Profile pIcture'
                                type='file'
                                nam='profilePicture'
                                value={this.state.profilePicture}
                                onChange={this.onChange}
                                />
                                <InputField
                                    placeholder='Company Name'
                                    name='company'
                                    type='text'
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    error={profileError.company}
                                />
                                <SelectField
                                    name='profession'
                                    value={this.state.profession}
                                    options={options}
                                    onChange={this.onChange}
                                    error={profileError.profession}
                                />
                                <InputField
                                    placeholder='Website'
                                    name='website'
                                    type='text'
                                    value={this.state.website}
                                    onChange={this.onChange}
                                    error={profileError.website}
                                />
                                <InputField
                                    placeholder='Location'
                                    name='location'
                                    type='text'
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={profileError.location}
                                />
                                <InputField
                                    placeholder='Skills'
                                    name='skills'
                                    type='text'
                                    value={this.state.skills}
                                    onChange={this.onChange}
                                    error={profileError.skills}
                                />
                                <InputField
                                    placeholder='Github Username'
                                    name='github'
                                    type='text'
                                    value={this.state.github}
                                    onChange={this.onChange}
                                    error={profileError.github}
                                />
                                <InputField
                                    placeholder='Twitter Handle'
                                    name='twitter'
                                    type='text'
                                    value={this.state.twitter}
                                    onChange={this.onChange}
                                    error={profileError.twitter}
                                />
                                <InputField
                                    placeholder='Facebook Handle'
                                    name='facebook'
                                    type='text'
                                    value={this.state.facebook}
                                    onChange={this.onChange}
                                    error={profileError.facebook}
                                />
                                <InputField
                                    placeholder='Linkedin Handle'
                                    name='linkedIn'
                                    type='text'
                                    value={this.state.linkedIn}
                                    onChange={this.onChange}
                                    error={profileError.linkedIn}
                                />
                                <TextArea
                                    placeholder=' Tell us little about yourself'
                                    name='bio'
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    error={profileError.bio}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" value="Create" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 col-lg-4 sidebar">
                        <div className="sidebar-box">
                            <div className="bio text-center">
                                <img src="assets/images/person_1.jpg" alt="Image Placeholder" className="img-fluid" />
                                <div className="bio-body">
                                    <h2>{user.lastName + ' ' + user.userId} </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                                    <p><a href="#" className="btn btn-primary btn-sm">Read my bio</a></p>
                                    <p className="social">
                                        <a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                                        <a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
                                        <a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
                                        <a href="#" className="p-2"><span className="fa fa-youtube-play"></span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profile,
        errors: state.errors
    }
}
export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));