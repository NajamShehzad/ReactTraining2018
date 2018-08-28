import React, { Component } from 'react';
import swal from 'sweetalert';
import './AdminEmploye.css'



export default class Admin extends Component {

    constructor() {
        super();

        this.state = {
            userName: "",
            password: "",
            login: false
        }
        this.loginScreen = this.loginScreen.bind(this);
    }


    alertCheck(e) {
        e.preventDefault();
        swal("Good job!", "You clicked the button!", "success");
    }




    loginScreen() {
        return (
            <div className="formDiv">
                <form className="form">
                    <div className="form-group">
                        <label>
                            User Name:
                            <input type='text' className="form-control" />
                        </label>
                    </div>
                    <div className="form-group" >
                        <label>
                            Password:
                            <input type='password' className="form-control" />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.alertCheck}>
                            Checking
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.loginScreen()}
            </div>
        )
    }

}