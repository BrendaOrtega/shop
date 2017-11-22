import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './login.css';
import {Paper, TextField, RaisedButton} from 'material-ui';
import * as userActions from '../../redux/actions/userActions';

class LoginPage extends Component {

    state = {
        user:{}
    };
    login=(e)=>{
        e.preventDefault();
        let user = this.state.user;
        this.props.userActions.logIn(user.email, user.password)
            .then(r=>{
                this.props.history.push('/admin')
            }).catch(e=>{
                console.log(e)
        })
    };

    handleText=(e)=>{
        let user = this.state.user;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
        console.log(user);
    };

    render() {
        return (
            <div className="login-page">
                <div className="login-form-container">
                    <div className="paper-form">
                        <h2>Inicia Sesión</h2>
                        <form action="">
                            <TextField
                                onChange={this.handleText}
                                name={'email'}
                                fullWidth={true}
                                floatingLabelFixed={true}
                                floatingLabelText={'Email'}/>
                            <br/>
                            <TextField
                                onChange={this.handleText}
                                name={'password'}
                                fullWidth={true}
                                floatingLabelFixed={true}
                                type={'password'}
                                floatingLabelText={'Password'}/>
                            <br/>
                            <RaisedButton
                                type={'submit'}
                                fullWidth={true}
                                onClick={this.login}>
                                LogIn
                            </RaisedButton>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}
LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPage;
