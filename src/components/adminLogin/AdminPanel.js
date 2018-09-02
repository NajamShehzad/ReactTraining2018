import React, { Component } from 'react';
import './AdminEmployeStyle.css';
import './flot-button.css';
import Table from './table';



export default class AdminPanel extends Component {

    constructor() {
        super();
        this.state = {
            employeName: '',
            currentIndex: null,
            condition: false,
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            date: '',
            editCondition: false,
            employeList: [
                { firstName: 'Najam', lastName: 'Shehzad', email: 'najam@gmail.com', date: '2014-02-09', salary: '150,500' },
                { firstName: 'Ali', lastName: 'Raza', email: 'ali@gmail.com', date: '2017-02-09', salary: '150,500' },
                { firstName: 'Irfan', lastName: 'Ali', email: 'irfan@gmail.com', date: '2015-02-09', salary: '150,500' },
            ]
        }
        this.firstName = this.firstName.bind(this);
        this.submitEmploye = this.submitEmploye.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.cancle = this.cancle.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    firstName(firstName) {
        this.setState({
            firstName
        })
    }
    lastName(lastName) {
        this.setState({
            lastName
        })
    }
    email(email) {
        this.setState({
            email
        })
    }
    salary(salary) {
        this.setState({
            salary
        })
    }
    date(date) {
        this.setState({
            date
        })
    }
    submitEmploye(e) {
        const { firstName, lastName, email, salary, date, employeList } = this.state;
        e.preventDefault();
        const obj = {
            firstName, lastName, email, salary, date
        }
        employeList.push(obj);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            date: '',
            employeList,
            condition: false
        })
    }





    onAdd(e) {
        e.preventDefault();
        console.log('Clicked');
        this.setState({
            condition: true
        })
    }
    edit(index) {
        const { employeList } = this.state;
        const { firstName, lastName, email, salary, date } = employeList[index];
        this.setState({
            firstName, lastName, email, date, salary, condition: true, editCondition: true, currentIndex: index
        })

    }
    delete(index) {
        const { employeList } = this.state;
        employeList.splice(index, 1);
        console.log(employeList);
        this.setState({ employeList, currentIndex: null, condition: null, editCondition: null });
    }
    saveEdit(e) {

        const { firstName, lastName, email, salary, date, employeList, currentIndex } = this.state;
        e.preventDefault();
        const obj = {
            firstName, lastName, email, salary, date
        }
        employeList[currentIndex] = obj;
        this.setState({
            employeList,
            condition: false,
            currentIndex: null,
            editCondition: false,
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            date: ''
        })

    }
    cancle(e) {
        e.preventDefault();
        this.setState({
            condition: false,
            currentIndex: null,
            editCondition: false,
            firstName: '',
            lastName: '',
            email: '',
            salary: '',
            date: ''
        })
    }



    inputField() {
        const { condition, editCondition } = this.state;
        return (
            <div className="container" >
                <form className="" onSubmit={this.submitEmploye} >

                    <div className="form-row" >
                        <div className="form-group col-md-6">
                            <label >
                                First Name:
                                </label>
                            <input
                                value={this.state.firstName}
                                required
                                type='text'
                                onChange={(event => this.firstName(event.target.value))}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>
                                Last Name:
                                </label>
                            <input
                                value={this.state.lastName}
                                required
                                type='text'
                                onChange={(event => this.lastName(event.target.value))}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="col-md-4">
                            <label>
                                Email:
                            <input
                                    value={this.state.email}
                                    type='email'
                                    required
                                    onChange={(event => this.email(event.target.value))}
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label>
                                Salary:
                            <input
                                    value={this.state.salary}
                                    required
                                    type='text'
                                    onChange={(event => this.salary(event.target.value))}
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label>
                                Join Date:
                            <input
                                    value={this.state.date}
                                    required
                                    type='date'
                                    onChange={(event => this.date(event.target.value))}
                                    className="form-control"
                                />
                            </label>
                        </div>
                    </div>
                    <div style={{ padding: 7 }} >
                        {editCondition && condition ? <button style={{ marginRight: 10 }} className="btn btn-success" onClick={this.saveEdit}>Update</button> : <button style={{ marginRight: 10 }} className="btn btn-success" >Submit</button>}
                        <button className="btn btn-info" onClick={this.cancle}>Cancle</button>
                    </div>
                </form>
            </div>
        )
    }
    userInfo() {
        return (
            <div style={{ textAlign: 'center', margin: 10 }}>
                <button onClick={this.props.logout} style={{float:"right"}} className="btn btn-primary"><i className="fa fa-sign-out"></i> Logout</button>
                <h1  >
                    {this.props.userName}
                </h1>
            </div>
        )
    }

    flotButton() {
        return (
            <div >

                <a className="float" onClick={this.onAdd.bind(this)} >
                    <i className="fa fa-plus my-float"></i>
                </a>
                <div className="label-container">
                    <div className="label-text">Add Employe</div>
                    <i className="fa fa-play label-arrow"></i>
                </div>
            </div>
        )
    }

    render() {
        const { condition, employeList } = this.state;
        return (
            <div className="" style={{ width: "100%" }}>
                {this.userInfo()}
                {condition && this.inputField()}
                <Table employeList={employeList} edit={this.edit} delete={this.delete} />
                {!condition && this.flotButton()}
            </div>
        )
    }
}


// WEBPACK FOOTER //
// ./src/components/adminLogin/AdminPanel.js