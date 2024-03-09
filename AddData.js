import { useNavigate, useEffect } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
// const appURL = "https://65e3190788c4088649f54e9b.mockapi.io/Student";

function AddData() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <>
      <div className="position-absolute top-0 start-0 container p-3">
        <input
          className="ml-2 mb-2 w-50 border border-info p-2 rounded"
          placeholder="Name"
          type="text"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <br />
        <input
          className="ml-2 mb-2 w-50 border border-info p-2 rounded"
          placeholder="Image"
          type="text"
          onChange={(e) => {
            setData({ ...data, image: e.target.value });
          }}
        />
        <br />
        <input
          className="ml-2 mb-2 w-50 border border-info p-2 rounded"
          placeholder="Contact"
          type="text"
          onChange={(e) => {
            setData({ ...data, phone: e.target.value });
          }}
        />
        <br />
        <input
          className="ml-2 mb-2 w-50 border border-info p-2 rounded"
          placeholder="Email"
          type="textarea"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <br />
        <input
          className="ml-2 mb-2 w-50 border border-info p-2 rounded"
          placeholder="Address"
          type="textarea"
          onChange={(e) => {
            setData({ ...data, address: e.target.value });
          }}
        />
        <br />
        <button
          className="btn btn-dark w-25 border-rounded"
          type="button"
          onClick={() => {
            fetch("http://localhost:5001/", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => {
              navigate("/");
            });
          }}
        >
          Add
        </button>
        <Link className="btn btn-dark m-2 w-25" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default AddData;
