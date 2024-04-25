import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users(){

    const [users, setUsers]=useState([{
        id: 1, Name: 'Mihal', Email: 'mihal@gmail.com', Age: 20,
    }])

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add User</Link>
                <table className="table">
                    <thead>
                        <tr>
                           <th>Name</th> 
                           <th>Email</th> 
                           <th>Age</th> 
                           <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) =>{
                                return (
                                  <tr key={user.id}>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                      <Link
                                        to="/update"
                                        className="btn btn-success"
                                      >
                                        Update User
                                      </Link>
                                      <Link
                                        to="/update"
                                        className="btn btn-danger"
                                      >
                                        Delete User
                                      </Link>
                                    </td>
                                  </tr>
                                );
                            })
                        }

                    </tbody>
                </table>

           </div>
        </div>
    )
}
export default Users;