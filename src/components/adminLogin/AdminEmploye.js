import React, { Component } from 'react';
import swal from 'sweetalert';
import './AdminEmployeStyle.css'
import AdminPanel from './AdminPanel'




export default class Admin extends Component {

    constructor() {
        super();

        this.state = {
            userName: "",
            password: "",
            login: false
        }
        this.loginScreen = this.loginScreen.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
        this.logout = this.logout.bind(this)
    }


    loginCheck(e) {
        e.preventDefault();
        const { userName, password } = this.state;
        console.log(userName, password);
        if (!userName || !password) {
            alert('Feel');
        }
        else if (userName === 'NajamShehzad' && password === '123456') {
            swal("Admin Panel", "Welcome Back!", "success");
            this.setState({
                login: true
            })
        }
        else {
            swal({
                title: "User Name Or Password Is Not Correct!",
                icon: "warning",
            });
        }

    }
    logout(){
        this.setState({
            login:false,userName:'',password:''
        })   
    }
    userName(value) {
        const userName = value;
        this.setState({
            userName
        })

    }
    password(value) {
        const password = value
        this.setState({
            password
        })
    }




    loginScreen() {
        return (
            <div className="formDiv">
            <h1>Admin Login</h1>
                <form className="form" onSubmit={this.loginCheck}>
                    <div className="form-group">
                        <label>
                            User Name:
                            <input
                                value={this.state.userName}
                                type='text'
                                onChange={(event => this.userName(event.target.value))}
                                className="form-control"
                                autoFocus
                            />
                        </label>
                    </div>
                    <div className="form-group" >
                        <label>
                            Password:
                            <input
                                value={this.state.password}
                                onChange={(event => this.password(event.target.value))}
                                type='password'
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-default">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }


    




    render() {
        return (
            <div>
                {!this.state.login ? this.loginScreen() : <AdminPanel logout={this.logout} userName={this.state.userName} />}
            </div>
        )
    }

}


// WEBPACK FOOTER //
// ./src/components/adminLogin/AdminEmploye.js