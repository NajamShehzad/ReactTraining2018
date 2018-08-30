import React, { Component } from 'react';

import './table.css'

export default function Table(props) {
    const { employeList } = props;
    return (
        <div className="" style={{ margin: 10 }}>
            <table className='' >
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
                                    <button className="btn  btn-outline-secondary" onClick={() => props.edit(index)} >Edit Employe</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => props.delete(index)}>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}


// WEBPACK FOOTER //
// ./src/components/adminLogin/table.js