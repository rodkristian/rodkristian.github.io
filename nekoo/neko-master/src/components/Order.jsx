import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Order() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  const refreshOrder = () => {
    fetch("http://localhost:8080/orders")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  return (
    <>
      <div className="p-5 bg-light">
        <div className="bg-white rounded p-4">
          <div className="mb-3">
            <span className="fs-3">Recent Orders</span>
          </div>
          <div className="mt-3 mb-3">
            <Link to="/orders/createorderform" className="btn btn-success">
              <FontAwesomeIcon icon={faPlus} className="me-1" />
              Create
            </Link>
            <a onClick={refreshOrder()} className="btn btn-outline-success ms-2">
              <FontAwesomeIcon icon={faArrowsRotate} className="me-1" />
              Refresh
            </a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Type</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
              data.map(d => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.user}</td>
                  <td>{d.type}</td>
                  <td>{d.brand}</td>
                  <td>{d.price}</td>
                  <td>{d.quantity}</td>
                  <td>
                    <a href="" className="btn btn-success">
                      Edit
                    </a>
                    <a href="" className="btn btn-danger ms-2">
                      Remove
                    </a>
                    <a href="" className="btn btn-primary ms-2">
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Order;
