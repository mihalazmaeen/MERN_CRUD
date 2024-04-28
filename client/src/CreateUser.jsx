import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function CreateUser() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate = useNavigate();
  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Add User</div>
            <div className="card-body">
              <form onSubmit={Submit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateUser;
