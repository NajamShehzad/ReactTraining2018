import React from 'react';

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
                                    <button className="btn btn-outline-info btn-edit" onClick={() => props.edit(index)}><i className="fa fa-pencil-square-o"></i></button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => props.delete(index)}><i className="fa fa-trash-o"></i></button>
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