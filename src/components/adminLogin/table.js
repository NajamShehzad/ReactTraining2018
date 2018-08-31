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
                                    <button class="btn btn-outline-info btn-edit" onClick={() => props.edit(index)}><i class="fa fa-pencil-square-o"></i></button>
                                </td>
                                <td>
                                    <button class="btn btn-outline-danger" onClick={() => props.delete(index)}><i class="fa fa-trash-o"></i></button>
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