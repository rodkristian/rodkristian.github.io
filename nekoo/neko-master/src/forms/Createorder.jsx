import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function createForm() {
    const[id,idpost]=useState("");
    const[user,userpost]=useState("");
    const[type,typepost]=useState("");
    const[brand,brandpost]=useState("");
    const[price,pricepost]=useState("");
    const[quantity,quantitypost]=useState("");

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const orderdata={user,type,brand,price,quantity};
      

      fetch("http://localhost:8080/orders",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(orderdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/orders');
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
                    <h2>Create Order</h2>
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
                          <label>User</label>
                          <input
                            required
                            value={user} 
                            onChange={e=>userpost(e.target.value)}
                            className="form-control"
                            placeholder="Enter user"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Type</label>
                          <input
                            required
                            value={type} 
                            onChange={e=>typepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter type"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Brand</label>
                          <input
                            required
                            value={brand} 
                            onChange={e=>brandpost(e.target.value)}
                            className="form-control"
                            placeholder="Enter brand"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Price</label>
                          <input
                            required
                            value={price} 
                            onChange={e=>pricepost(e.target.value)}
                            className="form-control"
                            placeholder="Enter price"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <label>Quantity</label>
                          <input
                            required
                            value={quantity} 
                            onChange={e=>quantitypost(e.target.value)}
                            className="form-control"
                            placeholder="Enter quantity"
                          ></input>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <button className="btn btn-success me-2" type="submit">
                            Save
                          </button>
                          <Link to="/orders" className="btn btn-danger">
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
