import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function createForm() {
    const[id,idpost]=useState("");
    const[firstname,firstnamepost]=useState("");
    const[lastname,lastnamepost]=useState("");
    const[nickname,nicknamepost]=useState("");
    const[handle,handlepost]=useState("");

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata={firstname,lastname,nickname,handle};
      

      fetch("http://localhost:8080/users",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/users');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

  return (
    <>
      <div className="p-5 bg-light">
        <div className="bg-white rounded p-4">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <form className="container" onSubmit={handlesubmit}>
                <div className="card border-0" style={{ textAlign: "left" }}>
                  <div className="card-title">
                    <h2>Create User</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>ID</label>
                          <input
                            value={id} 
                            disabled="disabled"
                            className="form-control"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Firstname</label>
                          <input
                            required
                            value={firstname} 
                            onChange={e=>firstnamepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter firstname"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Enter Lastname</label>
                          <input
                            required
                            value={lastname} 
                            onChange={e=>lastnamepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter lastname"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Nickname</label>
                          <input
                            required
                            value={nickname} 
                            onChange={e=>nicknamepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter nickname"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Handle</label>
                          <input
                            required
                            value={handle} 
                            onChange={e=>handlepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter handle @"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <button className="btn btn-success me-2" type="submit">
                            Save
                          </button>
                          <Link to="/users" className="btn btn-danger">
                            Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default createForm;
