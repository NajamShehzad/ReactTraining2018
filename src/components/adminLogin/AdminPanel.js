import React, { Component } from 'react';
import './AdminEmployeStyle.css'


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

            ]
        }
        this.firstName = this.firstName.bind(this);
        this.addEmploye = this.addEmploye.bind(this);
        this.submitEmploye = this.submitEmploye.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.cancle = this.cancle.bind(this);
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






    addEmploye() {
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








    table() {
        const { employeList } = this.state;
        return (
            <div className="" style={{ margin: 10 }}>
                <table className='table table-striped' >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Join Date</th>
                            <th>Edit Employe</th>
                            <th>Delete Employe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeList.map((item, index) => {
                            return (
                                <tr key={`${index} ${item} `}>
                                    <td>
                                        {item.firstName}
                                    </td>
                                    <td>
                                        {item.lastName}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.salary}
                                    </td>
                                    <td>
                                        {item.date}
                                    </td>
                                    <td>
                                        <button className="btn  btn-outline-secondary" onClick={this.edit.bind(this, index)} >Edit Employe</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={this.delete.bind(this, index)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
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
            <div style={{ textAlign: 'center',margin:10 }}>
                <button onClick={this.props.logout} className="btn btn-primary">Logout</button>
                <h1  >
                    {this.props.userName}
                </h1>
            </div>
        )
    }
    render() {
        const { condition } = this.state;
        return (
            <div className="" style={{ width: "100%" }}>
                {this.userInfo()}
                {condition ? this.inputField() : <div style={{ textAlign: 'center' }} ><button className="btn btn-outline-primary" onClick={this.addEmploye}>Add Employe</button></div>}
                {this.table()}
            </div>
        )
    }
}