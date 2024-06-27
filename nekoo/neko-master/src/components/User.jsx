import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function User() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setDataUser(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const refreshUser = () => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setDataUser(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <div className="p-5 bg-light">
        <div className="bg-white rounded p-4">
          <div className="mb-3">
            <span className="fs-3">Recent Users</span>
          </div>
          <div className="mt-3 mb-3">
            <Link to="/users/createuserform" className="btn btn-success">
              <FontAwesomeIcon icon={faPlus} className="me-1" />
              Create
            </Link>
            <a onClick={refreshUser()} className="btn btn-outline-success ms-2">
              <FontAwesomeIcon icon={faArrowsRotate} className="me-1" />
              Refresh
            </a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Nickname</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataUser &&
                dataUser.map((d) => (
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.nickname}</td>
                    <td>{d.handle}</td>
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

export default User;
